/**
 * Requirements 

 * A node module that has a findServer() function which returns a Promise that either:
 * - Resolves and return an online server with the lowest priority.
 * - Reject with an error if no servers are online.

 * The HTTP server requests should be used to check if the server is online or offline depending on the following requirements:
 * - All server GET requests should be run in parallel.
 * - The GET request should timeout after 5 seconds.
 * - When the GET request responds with a statuscode of 200-299 it is considered online.

 * A unit test that checks all the underlying components/requirements.
 * - The server requests should be mocked.
 */

type Server = {
  url: string;
  priority: number;
};

const fetchWithTimeout = async (
  resource: string | Request | URL,
  options?: any
): Promise<Response> => {
  return new Promise(async (resolve, reject) => {
    const { timeout = 5000 } = options;

    const controller = new AbortController();
    const id = setTimeout(() => {
      controller.abort();
      reject(`request got timeout: ${timeout}`);
    }, timeout);

    fetch(resource, {
      ...options,
      signal: controller.signal,
    })
      .then((resp) => {
        clearTimeout(id);
        resolve(resp);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const findServer = async (servers: Server[]) => {
  const requests = await Promise.all(
    servers.map(async (i) => {
      const online = await fetchWithTimeout(i.url, { timeout: 5000 })
        .then((resp) => {
          if (resp.status >= 200 && resp.status <= 299) {
            return resp.json();
          }

          throw new Error("Server is unavailable");
        })
        .then(() => {
          return true;
        })
        .catch(() => {
          return false;
        });

      return {
        ...i,
        online,
      };
    })
  );

  const filteredRequests = requests
    .filter((i) => i.online)
    .sort((a, b) => a.priority - b.priority);

  if (filteredRequests.length) {
    return filteredRequests[0].url;
  }

  return Promise.reject("No servers are online.");
};
