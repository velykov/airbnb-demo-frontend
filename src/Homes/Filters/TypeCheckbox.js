import React from "react";
import styled from "styled-components";
import checked from "./RoomsFilter/checked.svg";
import uncheked from "./RoomsFilter/unchecked.svg";

const Wrapper = styled.label`
  display: ${props => (props.inlineMode ? "inline-flex" : "flex")};
  flex-direction: row;
  margin-bottom: 16px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 212px;
`;

const Checkbox = styled.input`
  width: 24px;
  height: 24px;
  margin-right: 12px;
  margin-left: 8px;
  background: ${props =>
    props.checked ? `url(${checked})` : `url(${uncheked})`};
  appearance: none;
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
  position: absolute;
  right: 16px;
  height: 32px;
`;

export default props => {
  return (
    <Wrapper inlineMode={props.inlineMode}>
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
      {props.icon && (
        <Icon
          className={props.iconClassName}
          src={props.icon}
          alt={props.title}
        />
      )}
    </Wrapper>
  );
};
