import React from "react";
import PropTypes from "prop-types";
import Filter from "./Filter";
import GuestCounter from "./GuestCounter";
import filters from "../constants";

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
    let guests = this.state[guestType];
    this.setState({
      [guestType]: guests > 0 ? --guests : 0
    });
  };

  handleAdd = guestType => {
    this.setState({
      [guestType]: this.state[guestType] + 1
    });
  };

  render() {
    return (
      <Filter
        controls
        label="Guests"
        isShow={this.props.isShow}
        onToggle={this.handleToggle}
        onApply={this.handleApply.bind(this)}
        onReset={this.handleReset}
        onCancel={this.handleCancel.bind(this)}
      >
        <GuestCounter
          title="Adult"
          count={this.state.adults}
          onRemove={this.handleRemove.bind(this, "adults")}
          onAdd={this.handleAdd.bind(this, "adults")}
        />

        <GuestCounter
          title="Children"
          description="Ages 2 — 12"
          count={this.state.childs}
          onRemove={this.handleRemove.bind(this, "childs")}
          onAdd={this.handleAdd.bind(this, "childs")}
        />

        <GuestCounter
          title="Infants"
          description="Under 2"
          count={this.state.infants}
          onRemove={this.handleRemove.bind(this, "infants")}
          onAdd={this.handleAdd.bind(this, "infants")}
        />
      </Filter>
    );
  }
}

// state = {
//   adults: 0,
//   childs: 0,
//   infants: 0
// };
//
// toggle = () => {
//   this.props.onToggle(filters.guests);
// };

//   render() {
//     return (
//       <GuestFilter
//         adults={this.state.adults}
//         childs={this.state.childs}
//         infants={this.state.infants}
//         isShow={this.props.isShow}
//         onToggle={this.toggle}
//         onApply={state => this.setState(state)}
//       />
//     );
//   }
// }
