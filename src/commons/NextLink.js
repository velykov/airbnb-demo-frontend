import React from "react";
import styled from "styled-components";
import arrow from "./arrow.svg";

export default styled.a`
  position: absolute;
  right: 10px;
  top: ${props => (props.top ? props.top : 0)}%;
  bottom: ${props => (props.bottom ? props.bottom : 0)}%;

  width: 20px;
  height: 20px;

  color: #000;
  cursor: pointer;

  stroke: 0.5px solid rgba(72, 72, 72, 0.2);
  stroke-align: inside;

  border-radius: 50%;
  background: #fff url("${arrow}") center 8px no-repeat;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);
  box-sizing: border-box;
  transform: rotate(-90deg) scale(2, 2);
  
  &:focus {
    outline: 0;
  }

  display: none;

  @media(min-width: 992px) {
    display: flex;
  }
`;
