"use client";

import { Header } from "./components/header";
import styled from "styled-components";
import { ScContainer } from "./components/grid";
import AddIcon from "@mui/icons-material/Add";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";

const ScMain = styled.main`
  margin-bottom: 8rem;
`;

const ScBody = styled.div`
  @media screen and (min-width: 920px) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

const ScBodyContent = styled.div`
  flex: 5;
  padding-right: 2rem;

  p {
    line-height: 1.4;
  }
`;
const ScBodyAside = styled.div`
  flex: 4;

  img {
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
  }
`;

const ScTitle = styled.h1`
  font-weight: normal;
  font-size: 32px;
  margin-bottom: 1rem;
  margin-top: 0.5rem;

  @media screen and (min-width: 920px) {
    font-size: 42px;
    margin-bottom: 2rem;
  }
`;

const ScInformation = styled.p`
  margin-bottom: 1rem;

  @media screen and (min-width: 920px) {
    margin-bottom: 2rem;
  }
`;

const ScStepList = styled.div``;
const ScStepItemDiv = styled.div`
  border-bottom: 1px solid whitesmoke;
`;
const ScStepItem = styled.div`
  padding-top: 0.5rem;
  display: flex;

  &:last-child {
    border-bottom: none;
  }

  @media screen and (min-width: 920px) {
    padding-top: 1rem;
  }
`;
const ScStepItemIcon = styled.div`
  flex: none;
`;
const ScStepItemContent = styled.div`
  margin-left: 1rem;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`;
const ScStepBlock = styled.div`
  flex: none;
  padding-right: 2rem;
  max-width: 160px;
  margin-bottom: 0.5rem;

  @media screen and (min-width: 920px) {
    margin-bottom: 1rem;
  }
`;
const ScStepBlockGroup = styled.div`
  display: flex;
`;
const ScStepBlockLabel = styled.div`
  font-size: 12px;
  text-transform: uppercase;
`;
const ScStepBlockValue = styled.div`
  font-weight: 500;
`;

const ScButton = styled.button`
  color: #464646;
  border: 2px solid #c8626d;
  background-color: white;
  padding: 8px 16px 8px 12px;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: all 0.3s;
  font-weight: 500;
  display: flex;
  align-items: center;
  user-select: none;

  &:hover {
    background-color: #e3b0b6;
  }

  svg {
    margin-right: 4px;
  }
`;

export default function Home() {
  return (
    <ScMain>
      <Header />
      <ScContainer>
        <ScBody>
          <ScBodyAside>
            <img
              src="https://source.unsplash.com/random/800x600?Pizza"
              alt="Pizza"
            />
          </ScBodyAside>
          <ScBodyContent>
            <ScTitle>Whole-Grain Banana Bread</ScTitle>
            <ScInformation>
              This one-bowl banana bread — our <u>2018 Recipe of the Year</u> —
              uses the simplest ingredients, but is incredibly moist and
              flavorful. While the recipe calls for a 50/50 mix of flours
              (all-purpose and whole wheat), we often make the bread 100% whole
              wheat, and honestly? No one can tell, it&apos;s that good! And not
              only is this bread delicious — it&apos;s versatile.
            </ScInformation>
            <ScStepList>
              <ScStepItem>
                <ScStepItemIcon>
                  <AccessTimeOutlinedIcon style={{ width: 24, height: 24 }} />
                </ScStepItemIcon>
                <ScStepItemContent>
                  <ScStepBlock>
                    <ScStepBlockLabel>Prep</ScStepBlockLabel>
                    <ScStepBlockValue>10 mins</ScStepBlockValue>
                  </ScStepBlock>
                  <ScStepBlock>
                    <ScStepBlockLabel>Bake</ScStepBlockLabel>
                    <ScStepBlockValue>1 hr - 1 hr 15mins</ScStepBlockValue>
                  </ScStepBlock>
                  <ScStepBlock>
                    <ScStepBlockLabel>Total</ScStepBlockLabel>
                    <ScStepBlockValue>1 hr 10 mins</ScStepBlockValue>
                  </ScStepBlock>
                </ScStepItemContent>
              </ScStepItem>
              <ScStepItemDiv></ScStepItemDiv>
              <ScStepItem>
                <ScStepItemIcon>
                  <CakeOutlinedIcon style={{ width: 24, height: 24 }} />
                </ScStepItemIcon>
                <ScStepItemContent>
                  <ScStepBlock>
                    <ScStepBlockLabel>YIELD</ScStepBlockLabel>
                    <ScStepBlockValue>
                      1 loaf, 12 generous servings
                    </ScStepBlockValue>
                  </ScStepBlock>
                  <ScStepBlockGroup>
                    <ScButton>
                      <AddIcon style={{ width: 14, height: 14 }} /> Save Recipe
                    </ScButton>
                    <ScButton>
                      <LocalPrintshopOutlinedIcon
                        style={{ width: 14, height: 14 }}
                      />
                      Print
                    </ScButton>
                  </ScStepBlockGroup>
                </ScStepItemContent>
              </ScStepItem>
            </ScStepList>
          </ScBodyContent>
        </ScBody>
      </ScContainer>
    </ScMain>
  );
}
