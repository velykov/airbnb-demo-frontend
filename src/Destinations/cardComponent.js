import React from "react";
import styled from "styled-components";
import { Img } from "../commons/styled";

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  background: #ffffff;
`;

const Title = styled.div`
  font: bold 15px/18px Circular_Air-Bold;
  margin: 8px 0px 0px;
`;

export default function(props) {
  return (
    <Container>
      <Img src={props.img} alt={props.alt} />
      <Title>{props.title}</Title>
    </Container>
  );
}
