import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Checkbox from "../Checkbox";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 32px;
`;

const Title = styled.div`
  font: lighter 16px/19px Circular_Air-Light;
  color: #383838;
  margin-bottom: 4px;
  @media (min-width: 768px) {
    // font-size: 20px;
  }
`;

const Description = styled.div`
  color: #383838;
  font: lighter 14px/16px Circular_Air-Light;
  margin-bottom: 4px;
`;

const Link = styled(RouterLink)`
  font: lighter 14px/16px Circular_Air-Light;
  color: #0f7276;
  text-decoration: none;
  font: lighter 14px/16px Circular_Air-Light;
`;

export default props => {
  return (
    <Wrapper>
      <Checkbox onChange={props.onChange} isChecked={props.isChecked}>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
        <Link to={props.linkTo}>{props.link}</Link>
      </Checkbox>
    </Wrapper>
  );
};
