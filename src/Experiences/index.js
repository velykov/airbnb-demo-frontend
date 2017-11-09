import React from "react";
import styled from "styled-components";

import { Container, Column } from "../commons/styled";
import SeeAllLink from "../commons/seeAllLink";
import NextButton from "../commons/nextLink";

import Card from "./card";

import forest from "./forest.png";
import whale from "./whale.png";
import mountains from "./mountains.png";
import salsa from "./salsa.png";

const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const CardGroupRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
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
        <NextButton top="163" />
      </CardGroupRow>
    </Container>
  );
}
