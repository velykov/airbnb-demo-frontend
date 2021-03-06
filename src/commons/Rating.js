import React from "react";
import star from "./star.svg";
import { Img } from "./styled";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin-right: 4px;
`;

const Star = styled(Img)`
  width: 12px;
  height: 12px;
  margin-right: 4px;
`;

export default function() {
  return (
    <Container>
      <Star src={star} />
      <Star src={star} />
      <Star src={star} />
      <Star src={star} />
      <Star src={star} />
    </Container>
  );
}
