import React from "react";
import styled from "styled-components";
import { Img } from "../../UI";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
`;

const CardTitle = styled.div`
  margin: 8px 0px 0px;

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
      <Img src={props.img} alt={props.alt} width="100%" />
      <CardTitle>{props.title}</CardTitle>
    </Card>
  );
}
