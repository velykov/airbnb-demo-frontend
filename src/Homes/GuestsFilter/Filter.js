import React from "react";
import PropTypes from "prop-types";
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
`;

export default class extends React.Component {
  state = {
    isShow: false
  };

  onClick = () => {
    this.setState({ isShow: !this.state.isShow });
  };

  onCancel = () => {
    this.props.onCancel();
    this.setState({ isShow: false });
  };

  onApply = () => {
    this.setState({ isShow: false });
    this.props.onApply();
  };

  onReset = () => {
    this.props.onReset();
  };

  render() {
    return (
      <Wrapper>
        <Filter
          selected={this.state.isShow}
          onClick={this.onClick}
          isShow={this.state.isShow}
        >
          Guests
        </Filter>

        <Dropdown
          isShow={this.state.isShow}
          title="Guests"
          cancel={this.onCancel}
          reset={this.onReset}
          apply={this.onApply}
          content={this.props.children}
        />
      </Wrapper>
    );
  }
}

Filter.propTypes = {
  controls: PropTypes.object,
  onApply: PropTypes.func,
  onReset: PropTypes.func
};
