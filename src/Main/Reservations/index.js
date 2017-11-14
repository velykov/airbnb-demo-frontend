import React from "react";
import { Grid, Row } from "react-flexbox-grid";

import { Section, Slider, Slide, SectionTitle } from "../../UI";
import SeeAllLink from "../../UI/SeeAllLink";
import NextLink from "../../UI/NextLink";

import Card from "./Card";
import styled from "styled-components";
import chumley from "./chumley.png";
import hanjan from "./hanjan.png";
import meats from "./meats.png";
import seaprice from "./seaprice.png";

const Title = styled(SectionTitle)`
  align-items: center;
`;

export default function() {
  return (
    <Section>
      <Grid>
        <Title>
          Popular reservations around the world <SeeAllLink />
        </Title>
        <Row>
          <Slider>
            <Slide xs={6} md={4} lg={3}>
              <Card
                title="Chumley's"
                img={chumley}
                alt="Chumley's"
                category="speakeasy"
                price={60}
              />
            </Slide>
            <Slide xs={6} md={4} lg={3}>
              <Card
                title="Hanjan"
                img={hanjan}
                alt="Hanjan"
                category="korean gastropub"
                price={50}
              />
            </Slide>
            <Slide xs={6} md={4} lg={3}>
              <Card
                title="Hanjan"
                img={meats}
                alt="Prime Meats"
                category="german american"
                price={55}
              />
            </Slide>
            <Slide xs={6} md={4} lg={3}>
              <Card
                title="Seaprice"
                img={seaprice}
                alt="Seaprice"
                category="fine seafood"
                price={70}
              />
            </Slide>
            <NextLink top={30} />
          </Slider>
        </Row>
      </Grid>
    </Section>
  );
}
