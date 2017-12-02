import React from "react";
import Filter from "../Filter";
import PriceFilter from "./PriceFilter";
import filters from "../filterNames";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 24px 16px;
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
    const min = props.minPrice;
    const max = props.maxPrice;
    if (props.startPrice > min || props.endPrice < max)
      return `$${props.startPrice} - $${props.endPrice}`;
    if (props.startPrice > min) return `$${props.startPrice}+`;
    if (props.endPrice < max) return `Up to $${props.endPrice}`;
    return "Price";
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
        onCancel={this.handleCancel.bind(this)}
        mdWidth={326}
        mdHeight={274}
      >
        <Wrapper>
          <PriceFilter
            minPrice={this.props.minPrice}
            maxPrice={this.props.maxPrice}
            startPrice={this.state.startPrice}
            endPrice={this.state.endPrice}
            onChange={this.handleChangePrices}
          />
        </Wrapper>
      </Filter>
    );
  }
}
