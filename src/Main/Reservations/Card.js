import React from "react";
import styled from "styled-components";
import { Img } from "../../UI";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
`;

const Label = styled.span`
  margin: 8px 0 2px;
  text-transform: uppercase;

  @media (min-width: 320px) {
    font: bold 8px/9px Circular_Air-Bold;
  }

  @media (min-width: 768px) {
    font: bold 10px/12px Circular_Air-Bold;
  }
`;

const CardTitle = styled.div`
  margin: 0 0 4px;

  @media (min-width: 320px) {
    font: bold 14px/16px Circular_Air-Bold;
  }

  @media (min-width: 768px) {
    font: bold 18px/21px Circular_Air-Bold;
  }
`;

const Description = styled.p`
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
