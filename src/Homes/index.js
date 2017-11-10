import React from "react";

import { Container, CardGroupRow, Column, Title, Row } from "../commons/styled";
import SeeAllLink from "../commons/seeAllLink";
import NextLink from "../commons/nextLink";

import Card from "./cardComponent";

import left from "./left.png";
import middle from "./middle.png";
import right from "./right.png";

export default function() {
  return (
    <Container>
      <Row justify="flex-start" align="center">
        <Column size={11}>
          <Title>Homes</Title>
        </Column>
        <Column>
          <SeeAllLink />
        </Column>
      </Row>
      <CardGroupRow>
        <Column size={4}>
          <Card
            title="La Salentina, see, nature & relax"
            img={left}
            alt="La Salentina, see, nature & relax"
            price={82}
            type="Entire house"
            beds="9 beds"
            reviews={97}
          />
        </Column>
        <Column size={4}>
          <Card
            title="Your private 3 bedr. riad and exclusi..."
            img={middle}
            alt="Your private 3 bedr. riad and exclusi..."
            price={82}
            type="Entire house"
            beds="5 beds"
            reviews={161}
          />
        </Column>
        <Column size={4}>
          <Card
            title="Dreamy Tropical Tree House"
            img={right}
            alt="Dreamy Tropical Tree House"
            price={200}
            type="Entire treehouse"
            beds="1 bed"
            reviews={364}
          />
        </Column>
        <NextLink top={90} />
      </CardGroupRow>
    </Container>
  );
}
