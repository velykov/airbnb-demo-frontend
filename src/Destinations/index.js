import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Slider, Slide, SectionTitle } from "../commons/styled";
import NextLink from "../commons/NextLink";
import Card from "./Card";

import paris from "./paris.png";
import miami from "./miami.png";
import tokyo from "./tokyo.png";
import capetown from "./capetown.png";
import seoul from "./seoul.png";
import la from "./la.png";

export default function() {
  return (
    <section>
      <Grid>
        <SectionTitle>Feature destinations</SectionTitle>
        <Slider>
          <Slide xs={4} md={3} lg={2}>
            <Card title="Paris" img={paris} alt="Paris" />
          </Slide>
          <Slide xs={4} md={3} lg={2}>
            <Card title="Miami" img={miami} alt="Miami" />
          </Slide>
          <Slide xs={4} md={3} lg={2}>
            <Card title="Tokyo" img={tokyo} alt="Tokyo" />
          </Slide>
          <Slide xs={4} md={3} lg={2}>
            <Card title="Cape Town" img={capetown} alt="Cape Town" />
          </Slide>
          <Slide xs={4} md={3} lg={2}>
            <Card title="Seoul" img={seoul} alt="Seoul" />
          </Slide>
          <Slide xs={4} md={3} lg={2}>
            <Card title="Los Angeles" img={la} alt="Los Angeles" />
          </Slide>
          <NextLink top={40} />
        </Slider>
      </Grid>
    </section>
  );
}
