import React from "react";
import styled from "styled-components";
import { Img } from "../commons/styled";

const Container = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  drop-shadow: 4px 0 2px rgba(72, 72, 72, 0.08);
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
`;

const Title = styled.h2`
  padding-left: 24px;
  font: bold 17px/20px Circular_Air-Bold;
`;

export default function(props) {
  return (
    <Container>
      <Img src={props.img} alt={props.alt} />
      <Title>{props.title}</Title>
    </Container>
  );
}
