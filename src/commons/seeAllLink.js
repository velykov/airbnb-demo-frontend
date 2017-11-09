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
  font-family: CircularAir;
  line-height: 24px;
  font-size: 14px;
  text-align: right;
  border: 0;
  outline: none;
  cursor: pointer;
  color: #383838;
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
