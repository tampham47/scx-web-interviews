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
        <h2>Learn</h2>
        <p>Commodo veniam pariatur aliquip et incididunt deserunt aliqua. Exercitation minim cupidatat magna laborum occaecat in id aliqua dolore ut non. Anim eu duis quis consectetur proident excepteur cillum ipsum laborum Lorem est dolore. Velit commodo sit labore occaecat proident deserunt voluptate. Officia consectetur et eiusmod adipisicing quis. Fugiat proident velit est excepteur fugiat ea nulla ipsum.</p>
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
