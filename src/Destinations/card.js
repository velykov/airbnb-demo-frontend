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
  font-weight: bold;
  line-height: normal;
  margin: 8px 0px 0px;
  font-size: 15px;
  color: #383838;
`;

export default function(props) {
  return (
    <Container>
      <Img src={props.img} alt={props.alt} />
      <Title>{props.title}</Title>
    </Container>
  );
}
