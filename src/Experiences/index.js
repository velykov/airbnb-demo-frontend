import React from "react";
import styled from "styled-components";

import { Container, CardGroupRow, Column, Title } from "../commons/styled";
import SeeAllLink from "../commons/seeAllLink";
import NextLink from "../commons/nextLink";

import Card from "./cardComponent";

import forest from "./forest.png";
import whale from "./whale.png";
import mountains from "./mountains.png";
import salsa from "./salsa.png";

const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export default function() {
  return (
    <Container>
      <Row>
        <Column size="11">
          <Title>Experiences</Title>
        </Column>
        <Column>
          <SeeAllLink />
        </Column>
      </Row>
      <CardGroupRow>
        <Column size="3">
          <Card
            title="Forest therapy"
            img={forest}
            alt="Forest therapy"
            price="29"
            reviews="44"
          />
        </Column>
        <Column size="3">
          <Card
            title="Whale whatching"
            img={whale}
            alt="Whale whatching"
            price="69"
            reviews="46"
          />
        </Column>
        <Column size="3">
          <Card
            title="Table Mountain Summit; Cable Car Down"
            img={mountains}
            alt="Table Mountain Summit; Cable Car Down"
            price="69"
            reviews="44"
          />
        </Column>
        <Column size="3">
          <Card
            title="Salsa Night"
            img={salsa}
            alt="Salsa Night"
            price="50"
            reviews="44"
          />
        </Column>
        <NextLink top="163" />
      </CardGroupRow>
    </Container>
  );
}
