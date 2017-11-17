import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { ContentWrapper } from "../UI";
import HomesHeader from "./HomesHeader";
import Footer from "./Footer";
import Paginator from "./Paginator";
import Filters from "./Filters";
import Card from "./Card";
import Map from "./Map";
import styled from "styled-components";
import img1 from "./home1.png";
import img2 from "./home2.png";
import img3 from "./home3.png";
import img4 from "./home4.png";
import img5 from "./home5.png";
import img6 from "./home6.png";

const Wrapper = styled.div`
  @media (min-width: 320px) {
    padding-bottom: 24px;
  }

  @media (min-width: 768px) {
    padding-bottom: 40px;
  }
`;

const Main = styled.main`
  margin-top: 160px;
  padding-bottom: 25px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 992px) {
    width: 627px;
  }
`;

export default function() {
  return (
    <div>
      <HomesHeader value="Anywhere · Homes" />
      <Filters />
      <Main>
        <ContentWrapper>
          <Grid>
            <Row>
              <Col xs={12} md={6}>
                <Wrapper>
                  <Card
                    title="La Salentina, see, nature & relax"
                    img={img1}
                    alt="La Salentina, see, nature & relax"
                    price={82}
                    type="Entire house"
                    beds="9 beds"
                    reviews={97}
                  />
                </Wrapper>
              </Col>
              <Col xs={12} md={6}>
                <Wrapper>
                  <Card
                    title="Your private 3 bedr. riad and exclusi..."
                    img={img2}
                    alt="Your private 3 bedr. riad and exclusi..."
                    price={82}
                    type="Entire house"
                    beds="5 beds"
                    reviews={161}
                  />
                </Wrapper>
              </Col>
              <Col xs={12} md={6}>
                <Wrapper>
                  <Card
                    title="Dreamy Tropical Tree House"
                    img={img3}
                    alt="Dreamy Tropical Tree House"
                    price={200}
                    type="Entire treehouse"
                    beds="1 bed"
                    reviews={364}
                    paddingBottom={24}
                  />
                </Wrapper>
              </Col>
              <Col xs={12} md={6}>
                <Wrapper>
                  <Card
                    title="Best location old town luxury loft"
                    img={img4}
                    alt="Best location old town luxury loft"
                    price={110}
                    type="Entire apartment"
                    beds="1 bed"
                    reviews={369}
                  />
                </Wrapper>
              </Col>
              <Col xs={12} md={6}>
                <Wrapper>
                  <Card
                    title="Lussuoso. Vista incantevole."
                    img={img5}
                    alt="Lussuoso. Vista incantevole."
                    price={83}
                    type="Entire apartment"
                    beds="6 bed"
                    reviews={105}
                  />
                </Wrapper>
              </Col>
              <Col xs={12} md={6}>
                <Wrapper>
                  <Card
                    title="In the historical center of Lecce"
                    img={img6}
                    alt="In the historical center of Lecce"
                    price={72}
                    type="Entire house"
                    beds="1 bed"
                    reviews={221}
                  />
                </Wrapper>
              </Col>
            </Row>
          </Grid>
          <Paginator />
          <Footer />
        </ContentWrapper>
        <Map center={{ lat: 47.33333, lng: 13.33333 }} zoom={7} />
      </Main>
    </div>
  );
}
