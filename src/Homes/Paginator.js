import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";

const Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 18px 0 15px;
`;

const Link = styled.a`
  font: normal 16px/19px Circular_Air-Book;
  display: inline-block;
  width: 32px;
  height: 32px;
  line-height: 32px;
  text-decoration: none;
  background-color: ${props => (props.active ? "#008489" : "transparent")};
  color: ${props => (props.active ? "#fff" : "#0F7276")};
  border-radius: ${props => (props.active ? 50 : 0)}%;
  &:last-child {
    border: 1px solid #008489;
    border-radius: 50%;
  }
`;

const Total = styled.p`
  font: normal 16px/19px Circular_Air-Book;
  margin: 0 0 24px;
  color: #383838;
`;

export default function() {
  return (
    <Grid>
      <Row center="xs">
        <Col xs={12} md={4}>
          <Group>
            <Link href="#" active={true}>
              1
            </Link>
            <Link href="#">2</Link>
            <Link href="#">3</Link>
            <Link href="#">...</Link>
            <Link href="#">17</Link>
            <Link href="#">></Link>
          </Group>
        </Col>
      </Row>
      <Row center="xs">
        <Col xs={12}>
          <Total>1 – 18 of 300+ Rentals</Total>
        </Col>
      </Row>
    </Grid>
  );
}
