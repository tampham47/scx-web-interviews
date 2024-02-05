import { enableFetchMocks } from "jest-fetch-mock";

import { findServer } from "./main.js";

enableFetchMocks();

describe("find server", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test("should reject with an error if no servers are online", async () => {
    try {
      await findServer([
        {
          url: "https://a.com",
          priority: 1,
        },
        {
          url: "https://b.com",
          priority: 4,
        },
      ]);
    } catch (err) {
      expect(err).toBe("No servers are online.");
    }
  });

  describe("should return online server with the lowest priority", () => {
    test("all servers are online", async () => {
      fetchMock.mockResponseOnce(JSON.stringify({ data: "ok" }));
      fetchMock.mockResponseOnce(JSON.stringify({ data: "ok" }));
      fetchMock.mockResponseOnce(JSON.stringify({ data: "ok" }));
      fetchMock.mockResponseOnce(JSON.stringify({ data: "ok" }));

      const result = await findServer([
        {
          url: "https://does-not-work.perfume.new",
          priority: 1,
        },
        {
          url: "https://gitlab.com",
          priority: 4,
        },
        {
          url: "http://app.scnt.me",
          priority: 3,
        },
        {
          url: "https://offline.scentronix.com",
          priority: 2,
        },
      ]);

      expect(result).toBe("https://does-not-work.perfume.new");
    });

    test("some servers are offline", async () => {
      fetchMock.mockRejectOnce();
      fetchMock.mockResponseOnce(JSON.stringify({ data: "ok" }));
      fetchMock.mockRejectOnce();
      fetchMock.mockResponseOnce(JSON.stringify({ data: "ok" }));

      const result = await findServer([
        {
          url: "https://a.com",
          priority: 1,
        },
        {
          url: "https://b.com",
          priority: 4,
        },
        {
          url: "http://c.com",
          priority: 3,
        },
        {
          url: "https://d.com",
          priority: 2,
        },
      ]);

      expect(result).toBe("https://d.com");
    });

    test("should got timeout after 5 secs", async () => {
      fetchMock.mockImplementationOnce(
        () =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve(new Response(JSON.stringify({ data: "ok" })));
            }, 6000);
          })
      );
      fetchMock.mockResponseOnce(JSON.stringify({ data: "ok" }));

      const result = await findServer([
        {
          url: "https://a.com",
          priority: 1,
        },
        {
          url: "https://b.com",
          priority: 4,
        },
      ]);

      expect(result).toBe("https://b.com");
    }, 10000);

    test("slow responses within 5 secs would be okie", async () => {
      fetchMock.mockImplementationOnce(
        () =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve(
                new Response(JSON.stringify({ data: "ok" }), { status: 200 })
              );
            }, 4500);
          })
      );
      fetchMock.mockResponseOnce(JSON.stringify({ data: "ok" }));

      const result = await findServer([
        {
          url: "https://a.com",
          priority: 1,
        },
        {
          url: "https://b.com",
          priority: 4,
        },
      ]);

      expect(result).toBe("https://a.com");
    }, 10000);

    test("status code = 301 shouldn't be treated as available server", async () => {
      fetchMock.mockImplementationOnce(
        () =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve(
                new Response(JSON.stringify({ data: "ok" }), { status: 301 })
              );
            }, 4500);
          })
      );
      fetchMock.mockResponseOnce(JSON.stringify({ data: "ok" }));

      const result = await findServer([
        {
          url: "https://a.com",
          priority: 1,
        },
        {
          url: "https://b.com",
          priority: 4,
        },
      ]);

      expect(result).toBe("https://b.com");
    }, 10000);

    test("no servers are online incase of timeout and incorrect http status code", async () => {
      fetchMock.mockImplementationOnce(
        () =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve(
                new Response(JSON.stringify({ data: "ok" }), { status: 301 })
              );
            }, 4500);
          })
      );
      fetchMock.mockImplementationOnce(
        () =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve(
                new Response(JSON.stringify({ data: "ok" }), { status: 200 })
              );
            }, 5100);
          })
      );

      try {
        await findServer([
          {
            url: "https://a.com",
            priority: 1,
          },
          {
            url: "https://b.com",
            priority: 4,
          },
        ]);
      } catch (err) {
        expect(err).toBe("No servers are online.");
      }
    }, 10000);
  });
});
