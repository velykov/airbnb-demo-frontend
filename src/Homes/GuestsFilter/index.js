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
        initialState={this.state}
        onApply={state => this.setState(state)}
      />
    );
  }
}
