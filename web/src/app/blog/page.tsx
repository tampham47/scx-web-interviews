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
        <h2>Blog</h2>
        <p>Mollit culpa deserunt proident elit consequat duis reprehenderit. Qui voluptate proident labore elit do adipisicing veniam reprehenderit laboris nisi fugiat eiusmod. Dolore consequat non excepteur officia nisi enim esse ex ea sit sit sunt est. Proident cillum occaecat aliquip incididunt laborum. Culpa aliquip ut sit officia dolore sint adipisicing non commodo eiusmod elit sunt quis. Aliqua cillum aute occaecat qui reprehenderit cillum cupidatat commodo esse aliqua enim.</p>
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
