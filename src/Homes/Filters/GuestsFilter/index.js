import React from "react";
import PropTypes from "prop-types";
import Filter from "../Filter";
import GuestCounter from "./GuestCounter";
import filters from "../filterNames";
import styled from "styled-components";

const Content = styled.div`
  padding: 44px 8px 0;
  @media (min-width: 768px) {
    padding: 32px 16px 0 24px;
  }
`;

const guestTypes = {
  adults: "adults",
  childs: "childs",
  infants: "infants"
};

export default class extends React.Component {
  state = {
    adults: this.props.adults,
    childs: this.props.childs,
    infants: this.props.infants
  };

  handleApply = () => {
    this.props.onApply(this.state);
    this.handleToggle();
  };

  handleReset = () => {
    this.setState({
      adults: 0,
      childs: 0,
      infants: 0
    });
  };

  handleCancel = () => {
    this.setState({
      adults: this.props.adults,
      childs: this.props.childs,
      infants: this.props.infants
    });
    this.handleToggle();
  };

  handleToggle = () => {
    this.props.onToggle(filters.guests);
  };

  handleRemove = guestType => {
    const guests = this.state[guestType];
    this.setState({
      [guestType]: guests > 0 ? guests - 1 : 0
    });
  };

  handleAdd = guestType => {
    this.setState({
      [guestType]: this.state[guestType] + 1
    });
  };

  getCount = state => {
    return state.adults + state.childs + state.infants;
  };

  getLabel = state => {
    const count = this.getCount(state);
    return count > 0 ? `${count} guests` : "Guests";
  };

  render() {
    return (
      <Filter
        label={this.getLabel(this.state)}
        isShow={this.props.isShow}
        isSelected={this.props.isSelected}
        onToggle={this.handleToggle}
        onApply={this.handleApply}
        onReset={this.handleReset}
        onCancel={this.handleCancel}
        mdWidth={326}
        mdHeight={291}
      >
        <Content>
          <GuestCounter
            title="Adult"
            count={this.state.adults}
            onRemove={this.handleRemove.bind(this, guestTypes.adults)}
            onAdd={this.handleAdd.bind(this, guestTypes.adults)}
          />

          <GuestCounter
            title="Children"
            description="Ages 2 — 12"
            count={this.state.childs}
            onRemove={this.handleRemove.bind(this, guestTypes.childs)}
            onAdd={this.handleAdd.bind(this, guestTypes.childs)}
          />

          <GuestCounter
            title="Infants"
            description="Under 2"
            count={this.state.infants}
            onRemove={this.handleRemove.bind(this, guestTypes.infants)}
            onAdd={this.handleAdd.bind(this, guestTypes.infants)}
          />
        </Content>
      </Filter>
    );
  }
}

