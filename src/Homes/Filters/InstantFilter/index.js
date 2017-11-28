import React from "react";
import Filter from "../Filter";
import filters from "../filterNames";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 24px 16px;
`;

export default class extends React.Component {
  state = {
    instantBook: this.props.instantBook
  };

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
    this.props.onToggle(filters.instant);
  };

  handleChangePrices = result => {
    this.setState({});
  };

  getLabel = () => {
    //     const props = this.props;
    //     const min = props.min;
    //     const max = props.max;
    //     if (props.startPrice > min || props.endPrice < max) return `$${props.startPrice} - $${props.endPrice}`;
    //     if (props.startPrice > min) return `$${props.startPrice}+`;
    //     if (props.endPrice < max) return `Up to $${props.endPrice}`;
    //     return 'Price';
    return "Instant book";
  };

  // getTitleLabel = () => {
  //     const min = this.props.min;
  //     const max = this.props.max;
  //     const state = this.state;
  //     if (state.startPrice > min || state.endPrice < max) return `$${state.startPrice} - $${state.endPrice}`;
  //     if (state.startPrice > min) return `$${state.startPrice}+`;
  //     if (state.endPrice < max) return `Up to $${state.endPrice}`;
  //     return `$${state.startPrice} — $${state.endPrice}+`;
  // };

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
        mdHeight={167}
      >
        <Wrapper>Instant book will be here</Wrapper>
      </Filter>
    );
  }
}
