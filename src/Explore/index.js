import React from "react";
import { Container, Row, Column, Title } from "../commons/styled";
import Card from "./cardComponent";
import homes from "./homes.png";
import experiences from "./experiences.png";
import restaurants from "./restaurants.png";

export default function() {
  return (
    <Container>
      <Row>
        <Column size={12}>
          <Title>Explore Airbnb</Title>
        </Column>
      </Row>
      <Row>
        <Column size={4}>
          <Card title="Homes" img={homes} alt="Homes image" />
        </Column>
        <Column size={4}>
          <Card title="Experiences" img={experiences} alt="Experiences image" />
        </Column>
        <Column size={4}>
          <Card title="Restaurants" img={restaurants} alt="Restaurants image" />
        </Column>
      </Row>
    </Container>
  );
}
