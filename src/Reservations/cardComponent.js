import React from "react";
import styled from "styled-components";
import { Img } from "../commons/styled";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  flex-direction: column;
  background: #fff;
`;

const Label = styled.div`
  font: bold 10px/12px Circular_Air-Bold;
  margin: 8px 0 2px;
  text-transform: uppercase;
`;

const Title = styled.div`
  font: bold 18px/21px Circular_Air-Bold;
  margin: 0 0 4px;
`;

const Description = styled.div`
  font: lighter 18px/21px Circular_Air-Light;
  margin-bottom: 6px;
  text-align: left;
  mix-blend-mode: normal;
  opacity: 0.9;
`;

export default function(props) {
  return (
    <Container>
      <Img src={props.img} alt={props.alt} />
      <Label>{props.category}</Label>
      <Title>{props.title}</Title>
      <Description>About ${props.price} per person</Description>
    </Container>
  );
}
