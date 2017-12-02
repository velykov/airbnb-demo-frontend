import React from "react";
import styled from "styled-components";
import checked from "./checked.svg";
import uncheked from "./uncheked.svg";

const Checkbox = styled.input`
  width: 64px;
  height: 40px;
  position: absolute;
  right: 0;
  background: ${props =>
    props.checked ? `url(${checked})` : `url(${uncheked})`};
  appearance: none;
`;

const Wrapper = styled.label`
  display: flex;
  flex-direction: row;
`;

export default props => {
  return (
    <Wrapper>
      {props.children}

      <Checkbox
        type="checkbox"
        onChange={props.onChange}
        checked={props.isChecked}
      />
    </Wrapper>
  );
};
