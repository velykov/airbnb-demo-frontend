import React from "react";
import styled from "styled-components";

import { Container, CardGroupRow, Row, Column, Title } from "../commons/styled";
import SeeAllLink from "../commons/seeAllLink";
import NextLink from "../commons/nextLink";

import Card from "./cardComponent";

import chumley from "./chumley.png";
import hanjan from "./hanjan.png";
import meats from "./meats.png";
import seaprice from "./seaprice.png";

export default function() {
  return (
    <Container>
      <Row justify="flex-start" align="center">
        <Column size={11}>
          <Title>Popular reservations around the world</Title>
        </Column>
        <Column>
          <SeeAllLink />
        </Column>
      </Row>
      <CardGroupRow>
        <Column size={3}>
          <Card
            title="Chumley's"
            img={chumley}
            alt="Chumley's"
            category="speakeasy"
            price={60}
          />
        </Column>
        <Column size={3}>
          <Card
            title="Hanjan"
            img={hanjan}
            alt="Hanjan"
            category="korean gastropub"
            price={50}
          />
        </Column>
        <Column size={3}>
          <Card
            title="Hanjan"
            img={meats}
            alt="Prime Meats"
            category="german american"
            price={55}
          />
        </Column>
        <Column size={3}>
          <Card
            title="Seaprice"
            img={seaprice}
            alt="Seaprice"
            category="fine seafood"
            price={70}
          />
        </Column>
        <NextLink top={72} />
      </CardGroupRow>
    </Container>
  );
}
