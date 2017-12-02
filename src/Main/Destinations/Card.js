import React from "react";
import styled from "styled-components";
import { Card, CardImg } from "../../UI";

const CardTitle = styled.h4`
  margin: 0;

  @media (min-width: 320px) {
    font: bold 12px/14px Circular_Air-Bold;
  }

  @media (min-width: 768px) {
    font: bold 15px/18px Circular_Air-Bold;
  }
`;

export default function(props) {
  return (
    <Card>
      <CardImg src={props.img} alt={props.alt} width="100%" />
      <CardTitle>{props.title}</CardTitle>
    </Card>
  );
}
