import React from "react";
import styled from "styled-components";
import { Container, CardGroupRow, Column } from "../commons/styled";
import NextLink from "../commons/nextLink";
import Card from "./card";

import paris from "./paris.png";
import miami from "./miami.png";
import tokyo from "./tokyo.png";
import capetown from "./capetown.png";
import seoul from "./seoul.png";
import la from "./la.png";

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
        <Column size="12">
          <Title>Feature destinations</Title>
        </Column>
      </Row>
      <CardGroupRow>
        <Column size="2">
          <Card title="Paris" img={paris} alt="Paris" />
        </Column>
        <Column size="2">
          <Card title="Miami" img={miami} alt="Miami" />
        </Column>
        <Column size="2">
          <Card title="Tokyo" img={tokyo} alt="Tokyo" />
        </Column>
        <Column size="2">
          <Card title="Cape Town" img={capetown} alt="Cape Town" />
        </Column>
        <Column size="2">
          <Card title="Seoul" img={seoul} alt="Seoul" />
        </Column>
        <Column size="2">
          <Card title="Los Angeles"  img={la} alt="Los Angeles" />
        </Column>
        <NextLink top="109" />
      </CardGroupRow>
    </Container>
  );
}
