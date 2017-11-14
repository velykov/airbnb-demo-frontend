import React from "react";
import { Grid, Row } from "react-flexbox-grid";

import { Slider, Slide, Section, SectionTitle } from "../../UI";
import SeeAllLink from "../../UI/SeeAllLink";
import NextLink from "../../UI/NextLink";

import Card from "./Card";

import forest from "./forest.png";
import whale from "./whale.png";
import mountains from "./mountains.png";
import salsa from "./salsa.png";

export default function() {
  return (
    <Section>
      <Grid>
        <SectionTitle>
          Experiences <SeeAllLink />
        </SectionTitle>
        <Row>
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
        </Row>
      </Grid>
    </Section>
  );
}
