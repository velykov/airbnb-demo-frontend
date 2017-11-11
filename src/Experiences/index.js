import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

import { Slider, Slide, SectionTitle } from "../commons/styled";
import SeeAllLink from "../commons/seeAllLink";
import NextLink from "../commons/nextLink";

import Card from "./Card";

import forest from "./forest.png";
import whale from "./whale.png";
import mountains from "./mountains.png";
import salsa from "./salsa.png";

export default function() {
  return (
    <section>
      <Grid>
        <Row middle="xs">
          <Col xs={6} md={6}>
            <SectionTitle>Experiences</SectionTitle>
          </Col>
          <Col xs={3} xsOffset={3} md={2} mdOffset={4}>
            <SeeAllLink />
          </Col>
        </Row>
        <Slider>
          <Slide xs={6} md={4} lg={3}>
            <Card
              title="Forest therapy"
              img={forest}
              alt="Forest therapy"
              price={29}
              reviews={44}
            />
          </Slide>
          <Slide xs={6} md={4} lg={3}>
            <Card
              title="Whale whatching"
              img={whale}
              alt="Whale whatching"
              price={69}
              reviews={46}
            />
          </Slide>
          <Slide xs={6} md={4} lg={3}>
            <Card
              title="Table Mountain Summit; Cable Car Down"
              img={mountains}
              alt="Table Mountain Summit; Cable Car Down"
              price={69}
              reviews={44}
            />
          </Slide>
          <Slide xs={6} md={4} lg={3}>
            <Card
              title="Salsa Night"
              img={salsa}
              alt="Salsa Night"
              price={50}
              reviews={44}
            />
          </Slide>
          <NextLink top={45} />
        </Slider>
      </Grid>
    </section>
  );
}
