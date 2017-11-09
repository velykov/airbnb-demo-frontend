import React from "react";
import styled from "styled-components";

import { Container,CardGroupRow, Column } from "../commons/styled";
import SeeAllLink from "../commons/seeAllLink";
import NextLink from "../commons/nextLink";

import Card from "./card";

import left from "./left.png";
import middle from "./middle.png";
import right from "./right.png";

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
          <Title>Homes</Title>
        </Column>
        <Column>
          <SeeAllLink />
        </Column>
      </Row>
      <CardGroupRow>
        <Column size="4">
          <Card
            title="La Salentina, see, nature & relax"
            img={left}
            alt="La Salentina, see, nature & relax"
            price="82"
            type="Entire house"
            beds="9"
            reviews="97"
          />
        </Column>
        <Column size="4">
          <Card
            title="Your private 3 bedr. riad and exclusi..."
            img={middle}
            alt="Your private 3 bedr. riad and exclusi..."
            price="82"
            type="Entire house"
            beds="5"
            reviews="161"
          />
        </Column>
        <Column size="4">
          <Card
            title="Dreamy Tropical Tree House"
            img={right}
            alt="Dreamy Tropical Tree House"
            price="200"
            type="Entire treehouse"
            beds="1"
            reviews="364"
          />
        </Column>
        <NextLink top="90" />
      </CardGroupRow>
    </Container>
  );
}
