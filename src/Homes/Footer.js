import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import map from "./map.png";

const MapLink = styled.a`
  display: inline-block;
  @media (min-width: 320px) {
    margin: 24px 0;
  }

  @media (min-width: 768px) {
    margin: 0;
  }
  @media (min-width: 992px) {
    display: none;
  }
`;

const Description = styled.p`
  margin: 0;
  font: normal 16px/19px Circular_Air-Book;
  color: #636363;
`;

export default function() {
  return (
    <Grid>
      <Row center="xs" bottom="md">
        <Col xs={12} md={11} lg={12}>
          <Description>
            {" "}
            Enter dates to see full pricing. Additional fees apply. Taxes may be
            added.
          </Description>
        </Col>
        <Col xs={12} md={1} lg={12}>
          <Grid>
            <Row end="xs">
              <Col xs={12}>
                <MapLink href="#">
                  <img src={map} alt="" />
                </MapLink>
              </Col>
            </Row>
          </Grid>
        </Col>
      </Row>
    </Grid>
  );
}
