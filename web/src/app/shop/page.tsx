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
        <h2>Shop</h2>
        <p>
          Aliqua veniam pariatur adipisicing quis adipisicing nulla do ex proident quis sint aliqua eu. Pariatur nulla cupidatat enim duis sunt non adipisicing dolor reprehenderit proident amet. Adipisicing elit Lorem anim nulla officia dolore reprehenderit laborum consectetur. Voluptate magna amet eiusmod dolore est. Enim veniam aliquip sunt ullamco sint labore ut est.
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
