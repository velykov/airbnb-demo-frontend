import React from "react";
import styled from "styled-components";

import { Container, CardGroupRow, Column } from "../commons/styled";
import SeeAllLink from "../commons/seeAllLink";
import NextLink from "../commons/nextLink";

import Card from "./card";

import chumley from "./chumley.png";
import hanjan from "./hanjan.png";
import meats from "./meats.png";
import seaprice from "./seaprice.png";

const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Title = styled.h2`
  line-height: 34px;
  font-size: 32px;
  color: #383838;
`;

export default function() {
  return (
    <Container>
      <Row>
        <Column size="11">
          <Title>Popular reservations around the world</Title>
        </Column>
        <Column>
          <SeeAllLink />
        </Column>
      </Row>
      <CardGroupRow>
        <Column size="3">
          <Card
            title="Chumley's"
            img={chumley}
            alt="Chumley's"
            category="speakeasy"
            price="60"
          />
        </Column>
        <Column size="3">
          <Card
            title="Hanjan"
            img={hanjan}
            alt="Hanjan"
            category="korean gastropub"
            price="50"
          />
        </Column>
        <Column size="3">
          <Card
            title="Hanjan"
            img={meats}
            alt="Prime Meats"
            category="german american"
            price="55"
          />
        </Column>
        <Column size="3">
          <Card
            title="Seaprice"
            img={seaprice}
            alt="Seaprice"
            category="fine seafood"
            price="70"
          />
        </Column>
        <NextLink top="72" />
      </CardGroupRow>
    </Container>
  );
}
