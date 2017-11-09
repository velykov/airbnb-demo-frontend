import React from "react";
import styled from "styled-components";
import { Container, Row, Column } from "../commons/styled";
import Card from "./card";
import homes from "./homes.png";
import experiences from "./experiences.png";
import restaurants from "./restaurants.png";

const Title = styled.h1`
  font-family: inherit;
  font-style: bold;
  font-size: 32px;
  line-height: 34px;
  color: #383838;
`;

export default function() {
  return (
    <Container>
      <Row>
        <Column size="12">
          <Title>Explore Airbnb</Title>
        </Column>
      </Row>
      <Row>
        <Column size="4">
          <Card title="Homes" img={homes} alt="Homes image" />
        </Column>
        <Column size="4">
          <Card title="Experiences" img={experiences} alt="Experiences image" />
        </Column>
        <Column size="4">
          <Card title="Restaurants" img={restaurants} alt="Restaurants image" />
        </Column>
      </Row>
    </Container>
  );
}
