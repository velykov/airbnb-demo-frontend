import React from "react";

import styled from "styled-components";
import { Img } from "../../UI";

const Category = styled.div`
  display: flex;
  background: #fff;
  drop-shadow: 4px 0 2px rgba(72, 72, 72, 0.08);
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  @media (min-width: 320px) {
    flex-direction: column;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const CategoryTitle = styled.h2`
  font: bold 17px/20px Circular_Air-Bold;
  @media (min-width: 320px) {
    padding-left: 12px;
  }

  @media (min-width: 768px) {
    padding-left: 24px;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  box-sizing: border-box;

  @media (min-width: 320px) {
    max-width: 144px;
    max-height: 78px;
  }

  @media (min-width: 768px) {
    max-width: 96px;
    max-height: 72px;
  }
`;

export default function(props) {
  return (
    <Category>
      <ImgContainer>
        <Img src={props.img} alt={props.alt} width="100%" />
      </ImgContainer>
      <CategoryTitle>{props.title}</CategoryTitle>
    </Category>
  );
}
