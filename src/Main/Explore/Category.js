import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { Img } from "../../UI";

const Category = styled.div`
  display: flex;
  background: #fff;
  drop-shadow: 4px 0 2px rgba(72, 72, 72, 0.08);
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  box-sizing: border-box;

  @media (min-width: 320px) {
    flex-direction: column;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const CategoryTitle = styled.h2`
  @media (min-width: 320px) {
    font: bold 12px/14px Circular_Air-Bold;
    text-align: left;
    height: 40px;
    padding-left: 12px;
    display: flex;
    align-items: center;
    margin: 0;
  }

  @media (min-width: 768px) {
    font: bold 17px/20px Circular_Air-Bold;
    padding-left: 24px;
  }
`;

const Picture = styled(Img)`
  box-sizing: border-box;
  border-radius: 4px 0 0 0;
  @media (min-width: 320px) {
    max-width: 144px;
    max-height: 78px;
  }

  @media (min-width: 768px) {
    max-width: 96px;
    max-height: 72px;
  }
`;

const CategoryLink = styled(Link)`
  color: ${props => (props.color ? props.color : "inherit")};
  text-decoration: none;
  line-height: 0;
`;

export default function(props) {
  return (
    <Category>
      <CategoryLink to={props.href} title={props.title}>
        <Picture src={props.img} alt={props.alt} width="100%" />
      </CategoryLink>
      <CategoryTitle>
        <CategoryLink to={props.href} title={props.title}>
          {props.title}
        </CategoryLink>
      </CategoryTitle>
    </Category>
  );
}
