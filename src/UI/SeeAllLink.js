import React from "react";
import styled from "styled-components";
import arrow from "./arrow.svg";

const Link = styled.a`
  color: #686868;
  cursor: pointer;
  text-decoration: none;

  @media (min-width: 320px) {
    font: normal 12px/24px Circular_Air-Book;
  }

  @media (min-width: 768px) {
    font: normal 14px/24px Circular_Air-Book;
  }

  &:focus {
    outline: 0;
  }
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 50px;

  &:after {
    display: inline-flex;
    content: url("${arrow}");
    transform: rotate(-90deg);
    right: -16px;
  }
`;

export default function(props) {
  return <Link href={props.href ? props.href : "#"}>See all</Link>;
}
