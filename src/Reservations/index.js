import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

import { Slider, Slide, SectionTitle } from "../commons/styled";
import SeeAllLink from "../commons/SeeAllLink";
import NextLink from "../commons/NextLink";

import Card from "./Card";

import chumley from "./chumley.png";
import hanjan from "./hanjan.png";
import meats from "./meats.png";
import seaprice from "./seaprice.png";

export default function() {
  return (
    <section>
      <Grid>
        <Row middle="xs">
          <Col xs={10} md={10} lg={8}>
            <SectionTitle>Popular reservations around the world</SectionTitle>
          </Col>
          <Col xs={2} md={2} lg={1} lgOffset={3}>
            <SeeAllLink />
          </Col>
        </Row>
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
        </Slider>
        <NextLink top={30} />
      </Grid>
    </section>
  );
}
