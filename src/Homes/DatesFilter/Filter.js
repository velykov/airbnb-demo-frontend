import React from "react";
import styled from "styled-components";

import Dropdown from "./Dropdown";

const Wrapper = styled.span`
  display: inline-block;
`;

const Filter = styled.button`
  font: normal 14px/16px Circular_Air-Book;
  text-align: left;
  padding: 7px 16px;
  margin-right: 12px;
  margin-left: 6px;
  border-radius: 4px;
  display: inline-block;
  background: ${props => (props.selected ? "#008489" : "transparent")};
  border: 1px solid
    ${props => (props.selected ? "#008489" : " rgba(72, 72, 72, 0.2);")};
  color: ${props => (props.selected ? "#fff" : "#383838")};

  &:first-child {
    margin-left: 0px;
  }

  &:last-child {
    margin-right: 0px;
  }

  @media screen and (min-width: 576px) {
    font-size: 14px;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  &:focus {
    outline: 0;
  }
`;

export default class extends React.Component {
  state = {
    selected: false
  };

  onClick = () => {
    this.setState({ selected: !this.state.selected });
    this.props.closeDropdown();
  };

  onCancel = () => {
    this.props.onCancel();
    this.setState({ selected: false });
  };

  onApply = () => {
    this.props.onApply();
    this.setState({ selected: false });
  };

  onReset = () => {
    this.props.onReset();
  };

  render() {
    return (
      <Wrapper>
        <Filter
          className={this.props.className}
          onClick={this.onClick}
          selected={this.state.selected}
        >
          {this.props.label}
        </Filter>

        <Dropdown
          selected={this.state.selected}
          label={this.props.label}
          controls={this.props.controls}
          cancel={this.onCancel}
          reset={this.onReset}
          apply={this.onApply}
          content={this.props.children}
        />
      </Wrapper>
    );
  }
}
