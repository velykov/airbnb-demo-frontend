import React from "react";
import GuestFilter from "./GuestFilter";

export default class GuestsFilter extends React.Component {
  state = {
    adults: 0,
    childs: 0,
    infants: 0
  };

  render() {
    return (
      <GuestFilter
        adults={this.state.adults}
        childs={this.state.childs}
        infants={this.state.infants}
        onApply={state => this.setState(state)}
      />
    );
  }
}
