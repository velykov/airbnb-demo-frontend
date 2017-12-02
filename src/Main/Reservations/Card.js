import React from "react";
import styled from "styled-components";
import { Card, CardImg } from "../../UI";

const Label = styled.span`
  margin-bottom: 2px;
  text-transform: uppercase;

  @media (min-width: 320px) {
    font: bold 8px/9px Circular_Air-Bold;
  }

  @media (min-width: 768px) {
    font: bold 10px/12px Circular_Air-Bold;
  }
`;

const CardTitle = styled.h4`
  margin: 0 0 4px;

  @media (min-width: 320px) {
    font: bold 14px/16px Circular_Air-Bold;
  }

  @media (min-width: 768px) {
    font: bold 18px/21px Circular_Air-Bold;
  }
`;

const Description = styled.p`
  margin-top: 0;
  margin-bottom: 6px;
  text-align: left;
  mix-blend-mode: normal;
  opacity: 0.9;

  @media (min-width: 320px) {
    font: lighter 12px/14px Circular_Air-Light;
  }

  @media (min-width: 768px) {
    font: lighter 18px/21px Circular_Air-Light;
  }
`;

const Img = styled(CardImg)`
  margin-bottom: 7px;
`;

export default function(props) {
  return (
    <Card>
      <Img src={props.img} alt={props.alt} width="100%" />
      <Label>{props.category}</Label>
      <CardTitle>{props.title}</CardTitle>
      <Description>About ${props.price} per person</Description>
    </Card>
  );
}
