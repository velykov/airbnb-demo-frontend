import React from "react";
import styled from "styled-components";
import arrow from "./arrow.svg";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Link = styled.a`
  position: relative;
  font: normal 14px/24px Circular_Air-Book;
  text-align: right;
  border: 0;
  outline: none;
  cursor: pointer;
`;

const Arrow = styled.div`
  &:after {
    position: absolute;
    display: inline-block;
    content: url("${arrow}");
    transform: rotate(-90deg);
    right: -16px;
  }
`;

export default function() {
  return (
    <Container>
      <Link>
        <Arrow>See all</Arrow>
      </Link>
    </Container>
  );
}
