import React from "react";
import styled from "styled-components";
import Rating from "../commons/rating";
import { Img, Reviews, Review } from "../commons/styled";

const Card = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  flex-direction: column;
  background: #fff;
`;

const Title = styled.span`
  margin: 8px 0px 6px;
  font: lighter 15px/18px Circular_Air-Light;
`;

const Price = styled.span`
  font: bold 15px/18px Circular_Air-Bold;
`;

export default function(props) {
  return (
    <Card>
      <Img src={props.img} alt={props.alt} width="100%" />
      <Title>
        <Price>${props.price}</Price> {props.title}
      </Title>
      <Reviews>
        <Rating>
          <Rating />
        </Rating>
        <Review>{props.reviews} reviews</Review>
      </Reviews>
    </Card>
  );
}
