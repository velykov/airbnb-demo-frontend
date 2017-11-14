import React from "react";
import { Grid, Row } from "react-flexbox-grid";
import { Slider, Slide, Section, SectionTitle } from "../../UI";
import SeeAllLink from "../../UI/SeeAllLink";
import NextLink from "../../UI/NextLink";
import styled from "styled-components";

import Card from "../../Homes/Card";

import left from "./homes1.png";
import middle from "./homes2.png";
import right from "./homes3.png";

const Link = styled.a`
  text-decoration: none;
  color: #383838;
`;

export default function() {
  return (
    <Section>
      <Grid>
        <SectionTitle>
          <Link href="/homes">Homes</Link> <SeeAllLink href="/homes" />
        </SectionTitle>
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
    </Section>
  );
}
