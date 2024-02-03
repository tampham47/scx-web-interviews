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
        <h2>Recipes</h2>
        <p>
          Culpa adipisicing magna eiusmod eiusmod labore elit adipisicing anim
          dolore sint dolore aute duis. Aliquip duis aliqua ullamco labore magna
          esse sunt minim eu in nostrud elit fugiat nulla. Eu esse laborum in
          deserunt et labore dolor duis cillum consequat est proident. Non
          proident deserunt velit in quis dolore do sunt quis qui aute in.
          Pariatur consectetur consequat enim quis et ad occaecat duis
          reprehenderit et cupidatat adipisicing. Cupidatat nulla proident
          voluptate laboris do est quis voluptate.
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
