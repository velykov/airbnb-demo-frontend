import React from "react";
import styled from "styled-components";
import arrow from "./arrow.svg";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NextLink = styled.a`
  position: absolute;
  right: 0px;
  top: ${props => (props.top ? props.top : "auto")}px;

  width: 20px;
  height: 20px;

  color: #000;
  cursor: pointer;
  outline: none;

  stroke: 0.5px solid rgba(72, 72, 72, 0.2);
  stroke-align: inside;

  border-radius: 50%;
  background: #fff url("${arrow}") center 8px no-repeat;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);
  box-sizing: border-box;
  transform: rotate(-90deg) scale(2, 2);
`;

export default function(props) {
  return (
    <Container>
      <NextLink top={props.top} />
    </Container>
  );
}
