import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Dropdown from "./Dropdown";

const Wrapper = styled.div`
  display: inline-block;
`;

const Filter = styled.button`
  font: normal 14px/16px Circular_Air-Book;
  text-align: left;
  padding: 7px 16px;
  margin-right: 12px;
  margin-left: 6px;
  border-radius: 4px;
  background: ${props =>
    props.isShow || props.isSelected ? "#008489" : "transparent"};
  border: 1px solid
    ${props =>
      props.isShow || props.isSelected ? "#008489" : " rgba(72, 72, 72, 0.2);"};
  color: ${props => (props.isShow || props.isSelected ? "#fff" : "#383838")};
  cursor: pointer;

  &:first-child {
    margin-left: 0px;
  }

  &:last-child {
    margin-right: 0px;
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
          isSelected={this.props.isSelected}
          tabindex={this.props.tabindex}
        >
          {this.props.label}
        </Filter>

        <Dropdown
          title={this.props.label}
          resetBtnTitle={this.props.resetBtnTitle}
          saveBtnTitle={this.props.saveBtnTitle}
          isShow={this.props.isShow}
          cancel={this.props.onCancel}
          reset={this.props.onReset}
          apply={this.props.onApply}
          content={this.props.children}
          hideXsFooter={this.props.hideXsFooter}
          mdWidth={this.props.mdWidth}
          mdHeight={this.props.mdHeight}
          lgWidth={this.props.lgWidth ? this.props.lgWidth : this.props.mdWidth}
          lgHeight={
            this.props.lgHeight ? this.props.lgHeight : this.props.mdHeight
          }
        />
      </Wrapper>
    );
  }
}

Filter.propTypes = {
  isShow: PropTypes.boolean,
  onToggle: PropTypes.func,
  onApply: PropTypes.func,
  onReset: PropTypes.func,
  onCancel: PropTypes.func
};
