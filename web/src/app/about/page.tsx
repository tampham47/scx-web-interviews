"use client";

import { Header } from "../components/header";
import styled from "styled-components";
import { ScContainer } from "../components/grid";
import { Button } from "@mui/material";

const ScMain = styled.div``;

export default function Home() {
  return (
    <ScMain>
      <Header />

      <ScContainer>
        <h2>About</h2>
        <p>
          Mollit aute occaecat consequat ea laboris cillum culpa ullamco labore do ut magna fugiat. Culpa incididunt esse quis ad. Cillum mollit mollit deserunt incididunt irure qui ea mollit anim. Ea cillum velit ea dolore sit ipsum labore ad mollit sint non qui. Quis enim eu reprehenderit voluptate commodo.
        </p>
        <p>
          Nisi sunt magna minim sit sit consectetur. Cupidatat aliqua qui labore
          enim esse nulla eiusmod id reprehenderit exercitation laborum sunt
          consectetur id. Consectetur labore deserunt in aliqua sunt qui nulla
          sint nisi dolore.
        </p>

        <Button variant="contained" style={{ minWidth: 120 }}>
          Okie
        </Button>
      </ScContainer>
    </ScMain>
  );
}
