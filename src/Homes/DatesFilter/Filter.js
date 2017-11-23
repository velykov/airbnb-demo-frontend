import React from "react";
import styled from "styled-components";

import Dropdown from "./Dropdown";

const Wrapper = styled.span`
  display: inline-block;
  margin-right: 12px;
  margin-left: 6px;
`;

const Filter = styled.button`
  font: normal 14px/16px Circular_Air-Book;
  text-align: left;
  padding: 7px 16px;
  border-radius: 4px;
  display: inline-block;
  background: ${props => (props.isShow ? "#008489" : "transparent")};
  border: 1px solid
    ${props => (props.isShow ? "#008489" : " rgba(72, 72, 72, 0.2);")};
  color: ${props => (props.isShow ? "#fff" : "#383838")};

  &:first-child {
    margin-left: 0px;
  }

  &:last-child {
    margin-right: 0px;
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export default class extends React.Component {
  render() {
    return (
      <Wrapper>
        <Filter
          className={this.props.className}
          onClick={this.props.onToggle}
          isShow={this.props.isShow}
        >
          {this.props.label}
        </Filter>

        {this.props.isShow && (
          <Dropdown
            label={this.props.label}
            controls={this.props.controls}
            cancel={this.props.onCancel}
            reset={this.props.onReset}
            apply={this.props.onApply}
            content={this.props.children}
          />
        )}
      </Wrapper>
    );
  }
}
