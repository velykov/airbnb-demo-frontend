import React from "react";
import MoreFilter from "./MoreFilter";

export default class RoomsFilter extends React.Component {
  state = {};

  render() {
    return (
      <MoreFilter
        adults={this.state.adults}
        childs={this.state.childs}
        infants={this.state.infants}
        onApply={state => this.setState(state)}
      />
    );
  }
}
