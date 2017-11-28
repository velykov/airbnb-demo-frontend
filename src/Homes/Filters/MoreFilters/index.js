import React from "react";
import Filter from "../Filter";
import filters from "../filterNames";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 24px 16px;
`;

export default class extends React.Component {
  state = {};

  handleApply = () => {
    this.props.onApply(this.state);
    this.handleToggle();
  };

  handleReset = () => {
    this.setState({});
  };

  handleCancel = () => {
    this.setState({});
    this.handleToggle();
  };

  handleToggle = () => {
    this.props.onToggle(filters.more);
  };

  handleChangePrices = result => {
    this.setState({});
  };

  getLabel = () => {
    return "More";
  };

  render() {
    return (
      <Filter
        label={this.getLabel()}
        className={this.props.className}
        isShow={this.props.isShow}
        isSelected={this.props.isSelected}
        onToggle={this.handleToggle}
        onApply={this.handleApply.bind(this)}
        onReset={this.handleReset}
        onCancel={this.handleCancel.bind(this)}
        mdWidth={326}
        mdHeight={274}
      >
        <Wrapper>More will be here</Wrapper>
      </Filter>
    );
  }
}
