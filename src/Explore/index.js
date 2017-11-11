import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Slider, Slide, SectionTitle } from "../commons/styled";
import Card from "./Category";
import homes from "./homes2.png";
import experiences from "./experiences2.png";
import restaurants from "./restaurants2.png";

export default function() {
  return (
    <section>
      <Grid>
        <Row>
          <Col xs md lg>
            <SectionTitle>Explore Airbnb</SectionTitle>
          </Col>
        </Row>
        <Slider>
          <Slide xs={6} md={5} lg={4}>
            <Card title="Homes" img={homes} alt="Homes image" />
          </Slide>
          <Slide xs={6} md={5} lg={4}>
            <Card
              title="Experiences"
              img={experiences}
              alt="Experiences image"
            />
          </Slide>
          <Slide xs={6} md={5} lg={4}>
            <Card
              title="Restaurants"
              img={restaurants}
              alt="Restaurants image"
            />
          </Slide>
        </Slider>
      </Grid>
    </section>
  );
}
