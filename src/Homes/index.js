import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Slider, Slide, SectionTitle } from "../commons/styled";
import SeeAllLink from "../commons/SeeAllLink";
import NextLink from "../commons/NextLink";

import Card from "./Card";

import left from "./left.png";
import middle from "./middle.png";
import right from "./right.png";

export default function() {
  return (
    <section>
      <Grid>
        <Row middle="xs">
          <Col xs={6} md={6}>
            <SectionTitle>Homes</SectionTitle>
          </Col>
          <Col xs={3} xsOffset={3} md={2} mdOffset={4}>
            <SeeAllLink />
          </Col>
        </Row>
        <Row>
          <Slider>
            <Slide xs={8} md={5} lg={4}>
              <Card
                title="La Salentina, see, nature & relax"
                img={left}
                alt="La Salentina, see, nature & relax"
                price={82}
                type="Entire house"
                beds="9 beds"
                reviews={97}
              />
            </Slide>
            <Slide xs={8} md={5} lg={4}>
              <Card
                title="Your private 3 bedr. riad and exclusi..."
                img={middle}
                alt="Your private 3 bedr. riad and exclusi..."
                price={82}
                type="Entire house"
                beds="5 beds"
                reviews={161}
              />
            </Slide>
            <Slide xs={8} md={5} lg={4}>
              <Card
                title="Dreamy Tropical Tree House"
                img={right}
                alt="Dreamy Tropical Tree House"
                price={200}
                type="Entire treehouse"
                beds="1 bed"
                reviews={364}
              />
            </Slide>
            <NextLink top={35} />
          </Slider>
        </Row>
      </Grid>
    </section>
  );
}
