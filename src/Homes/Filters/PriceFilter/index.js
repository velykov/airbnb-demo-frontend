import React from "react";
import Filter from "../Filter";
import Rheostat from "rheostat";
import filters from "../filterNames";
import styled from "styled-components";
import "./slider.css";
import price from "./price.svg";

const Title = styled.div`
  color: #383838;
  font: lighter 16px/19px Circular_Air-Light;
  margin-bottom: 8px;
`;

const Description = styled.div`
  color: #383838;
  font: lighter 12px/14px Circular_Air-Light;
  margin-bottom: 32px;
`;

const Wrapper = styled.div`
  padding: 24px 16px;
`;

const Container = styled.div`
  padding-right: 32px;
  background: url(${price}) 32px center no-repeat;
  padding-top: 78px;
`;

export default class extends React.Component {
  state = {
    startPrice: this.props.startPrice,
    endPrice: this.props.endPrice
  };

  handleApply = () => {
    this.props.onApply(this.state);
    this.handleToggle();
  };

  handleReset = () => {
    this.setState({
      startPrice: this.props.min,
      endPrice: this.props.max
    });
  };

  handleCancel = () => {
    this.setState({
      startPrice: this.props.startPrice,
      endPrice: this.props.endPrice
    });
    this.handleToggle();
  };

  handleToggle = () => {
    this.props.onToggle(filters.price);
  };

  handleChangePrices = result => {
    this.setState({
      startPrice: result.values[0],
      endPrice: result.values[1]
    });
  };

  getLabel = () => {
    const props = this.props;
    const min = props.min;
    const max = props.max;
    if (props.startPrice > min || props.endPrice < max)
      return `$${props.startPrice} - $${props.endPrice}`;
    if (props.startPrice > min) return `$${props.startPrice}+`;
    if (props.endPrice < max) return `Up to $${props.endPrice}`;
    return "Price";
  };

  getTitleLabel = () => {
    const min = this.props.min;
    const max = this.props.max;
    const state = this.state;
    if (state.startPrice > min || state.endPrice < max)
      return `$${state.startPrice} - $${state.endPrice}`;
    if (state.startPrice > min) return `$${state.startPrice}+`;
    if (state.endPrice < max) return `Up to $${state.endPrice}`;
    return `$${state.startPrice} — $${state.endPrice}+`;
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
        <Wrapper>
          <Title>{this.getTitleLabel()}</Title>
          <Description>The average nightly price is $75.</Description>
          <Container>
            <Rheostat
              min={this.props.min}
              max={this.props.max}
              values={[this.state.startPrice, this.state.endPrice]}
              onChange={this.handleChangePrices}
            />
          </Container>
        </Wrapper>
      </Filter>
    );
  }
}
