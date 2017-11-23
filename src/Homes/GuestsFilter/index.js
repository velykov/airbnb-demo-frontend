import React from "react";
import GuestFilter from "./GuestFilter";
import filters from "../constants";

export default class GuestsFilter extends React.Component {
  state = {
    adults: 0,
    childs: 0,
    infants: 0
  };

  toggle = () => {
    this.props.onToggle(filters.guests);
  };

  render() {
    return (
      <GuestFilter
        adults={this.state.adults}
        childs={this.state.childs}
        infants={this.state.infants}
        isShow={this.props.isShow}
        onToggle={this.toggle}
        onApply={state => this.setState(state)}
      />
    );
  }
}
