import React from "react";
import styled from "styled-components";
import privat from "./private.svg";
import shared from "./shared.svg";
import home from "./home.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
`;

const Checkbox = styled.input`
  width: 24px;
  height: 24px;
  border: 1px solid rgba(72, 72, 72, 0.3);
  border-radius: 4px;
  margin-right: 12px;
  background: transparent;
`;

const Title = styled.div`
  font: normal 16px/19px Circular_Air-Light;
  color: #383838;
  width: 196px;
`;

const Description = styled(Title)`
  font-size: 12px;
`;

const Icon = styled.img`
  height: 32px;
`;

export default props => {
  let typeImg = null;
  switch (props.type) {
    case "home":
      typeImg = home;
      break;
    case "private":
      typeImg = privat;
      break;
    default:
      typeImg = shared;
  }
  return (
    <Wrapper>
      <Checkbox
        type="checkbox"
        checked={props.isActive}
        onChange={props.onChange}
      />
      <Info>
        {props.isActive}
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
      </Info>
      <Icon src={typeImg} alt="Room type" />
    </Wrapper>
  );
};
