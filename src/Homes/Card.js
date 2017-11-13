import React from "react";
import styled from "styled-components";
import Rating from "../commons/Rating";
import { Img, Reviews, Review } from "../commons/styled";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
`;

const CardTitle = styled.h4`
  margin: 8px 0px 6px;

  @media (min-width: 320px) {
    font: bold 13px/15px Circular_Air-Bold;
  }

  @media (min-width: 768px) {
    font: bold 15px/18px Circular_Air-Bold;
  }
`;

const Description = styled.p`
  margin-bottom: 6px;
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
      <Img src={props.img} alt={props.alt} width="100%" />
      <CardTitle>
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
