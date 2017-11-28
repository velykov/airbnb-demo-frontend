import React from "react";
import styled from "styled-components";
import checked from "./checked.svg";
import uncheked from "./uncheked.svg";

const Content = styled.div`
  width: 200px;
  margin-right: 30px;
`;

const Title = styled.div`
  color: #383838;
  font: normal 18px/21px Circular_Air-Book;
  margin-bottom: 4px;
`;

const Description = styled.div`
  color: #383838;
  font: lighter 14px/16px Circular_Air-Light;
`;

const Checkbox = styled.input`
  width: 65px;
  height: 40px;
  background: ${props =>
    props.checked ? `url(${checked})` : `url(${uncheked})`};
  appearance: none;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default props => {
  return (
    <Wrapper>
      <Content>
        {props.children}

        {props.title && <Title>{props.title}</Title>}

        {props.description && <Description>{props.description}</Description>}
      </Content>

      <Checkbox
        type="checkbox"
        onChange={props.onChange}
        checked={props.isChecked}
      />
    </Wrapper>
  );
};
