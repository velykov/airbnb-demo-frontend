import React from "react";
import styled from "styled-components";
import Rating from "../UI/Rating";
import { Card, CardImg, CardTitle, Reviews, Review } from "../UI";

const Description = styled.p`
  margin: 0 0 6px 0;
  text-align: left;

  @media (min-width: 320px) {
    font: lighter 13px/15px Circular_Air-Light;
  }

  @media (min-width: 768px) {
    font: lighter 15px/18px Circular_Air-Light;
  }
`;

export default function(props) {
  return (
    <Card>
      <CardImg src={props.img} alt={props.alt} width="100%" />
      <CardTitle marginBottom={4}>
        ${props.price} {props.title}
      </CardTitle>
      <Description>
        {props.type} · {props.beds}
      </Description>
      <Reviews>
        <Rating />
        <Review>{props.reviews} · Superhost</Review>
      </Reviews>
    </Card>
  );
}
