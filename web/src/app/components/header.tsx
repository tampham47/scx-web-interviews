import Link from "next/link";
import styled from "styled-components";
import { ScContainer } from "./grid";

const ScMain = styled.header`
  margin-bottom: 1rem;

  @media screen and (min-width: 600px) {
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 920px) {
    margin-bottom: 4rem;
  }
`;

const ScBody = styled.div`
  display: flex;
  align-items: center;
  height: 72px;
`;

const ScLogoLink = styled(Link)`
  text-decoration: none;
  color: #464646;
  text-transform: uppercase;
  font-weight: bold;
`;

const ScLogo = styled.img`
  height: 40px;
  margin-right: 16px;
`;

const ScLink = styled(Link)`
  text-decoration: none;
  color: #464646;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  padding: 8px 2px;
  margin-left: 14px;
  margin-right: 14px;
  border-bottom: 2px solid transparent;
  transition: all 0.3s;
  display: none;

  &:hover {
    border-bottom: 2px solid #c8626d;
  }

  @media screen and (min-width: 600px) {
    display: initial;
  }
`;

export const Header = () => {
  return (
    <ScMain>
      <ScContainer>
        <ScBody>
          <ScLogoLink href="/">
            <ScLogo src="/imgs/bear.png" />
          </ScLogoLink>
          <ScLink href="/shop">Shop</ScLink>
          <ScLink href="/recipes">Recipes</ScLink>
          <ScLink href="/learn">Learn</ScLink>
          <ScLink href="/about">About</ScLink>
          <ScLink href="/blog">Blog</ScLink>
        </ScBody>
      </ScContainer>
    </ScMain>
  );
};
