import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Slider, Slide, SectionTitle } from "../../UI";
import SeeAllLink from "../../UI/SeeAllLink";
import NextLink from "../../UI/NextLink";

import Card from "./Card";

import left from "./homes1.png";
import middle from "./homes2.png";
import right from "./homes3.png";

export default function() {
  return (
    <section>
      <Grid>
        <Row middle="xs">
          <Col xs={6} md={6}>
            <SectionTitle>Homes</SectionTitle>
          </Col>
          <Col xs={3} xsOffset={3} md={2} mdOffset={4}>
            <SeeAllLink href="/homes" />
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
            <NextLink top={35} href="/homes" />
          </Slider>
        </Row>
      </Grid>
    </section>
  );
}
