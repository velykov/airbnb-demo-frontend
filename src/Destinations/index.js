import React from "react";
import { Container, CardGroupRow, Row, Column, Title } from "../commons/styled";
import NextLink from "../commons/nextLink";
import Card from "./cardComponent";

import paris from "./paris.png";
import miami from "./miami.png";
import tokyo from "./tokyo.png";
import capetown from "./capetown.png";
import seoul from "./seoul.png";
import la from "./la.png";

export default function() {
  return (
    <Container>
      <Row justify="flex-start" align="center">
        <Column size={12}>
          <Title>Feature destinations</Title>
        </Column>
      </Row>
      <CardGroupRow>
        <Column size={2}>
          <Card title="Paris" img={paris} alt="Paris" />
        </Column>
        <Column size={2}>
          <Card title="Miami" img={miami} alt="Miami" />
        </Column>
        <Column size={2}>
          <Card title="Tokyo" img={tokyo} alt="Tokyo" />
        </Column>
        <Column size={2}>
          <Card title="Cape Town" img={capetown} alt="Cape Town" />
        </Column>
        <Column size={2}>
          <Card title="Seoul" img={seoul} alt="Seoul" />
        </Column>
        <Column size={2}>
          <Card title="Los Angeles" img={la} alt="Los Angeles" />
        </Column>
        <NextLink top={109} />
      </CardGroupRow>
    </Container>
  );
}
