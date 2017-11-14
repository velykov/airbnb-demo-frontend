import React from "react";
import styled from "styled-components";
import Header from "../Header";

const Wrapper = styled.header`
  @media (min-width: 320px) {
    margin-bottom: 40px;
  }
  @media (min-width: 768px) {
    margin-bottom: 48px;
  }
`;

export default () => {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
};
