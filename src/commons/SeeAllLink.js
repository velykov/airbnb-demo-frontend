import React from "react";
import styled from "styled-components";
import arrow from "./arrow.svg";

const Container = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 -2px 0 -8px;
`;

const Link = styled.a`
  position: relative;

  text-align: right;
  border: 0;
  cursor: pointer;

  @media (min-width: 320px) {
    font: normal 12px/24px Circular_Air-Book;
  }

  @media (min-width: 768px) {
    font: normal 14px/24px Circular_Air-Book;
  }

  &:focus {
    outline: 0;
  }

  &:after {
    display: inline-block;
    content: url("${arrow}");
    transform: rotate(-90deg);
    right: -16px;
  }
`;

export default function() {
  return (
    <Container>
      <Link>See all</Link>
    </Container>
  );
}
