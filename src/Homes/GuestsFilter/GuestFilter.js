import React from "react";
import PropTypes from "prop-types";
import Filter from "./Filter";
import GuestCounter from "./GuestCounter";
import filters from "../constants";

export default class GuestFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adults: props.adults,
      childs: props.childs,
      infants: props.infants
    };
  }

  apply = () => {
    this.props.onApply(this.state);
  };

  reset = () => {
    this.setState({
      adults: 0,
      childs: 0,
      infants: 0
    });
  };

  cancel = () => {
    this.props.onToggle(filters.guests);
    this.setState({
      adults: this.props.adults,
      childs: this.props.childs,
      infants: this.props.infants
    });
  };

  remove = guestType => {
    let guests = this.state[guestType];
    this.setState({
      [guestType]: guests > 0 ? --guests : 0
    });
  };

  add = guestType => {
    this.setState({
      [guestType]: this.state[guestType] + 1
    });
  };

  render() {
    return (
      <Filter
        controls
        isShow={this.props.isShow}
        onToggle={this.props.onToggle}
        onApply={this.apply}
        onReset={this.reset}
        onCancel={this.cancel}
      >
        <GuestCounter
          title="Adult"
          count={this.state.adults}
          onRemove={this.remove.bind(this, "adults")}
          onAdd={this.add.bind(this, "adults")}
        />

        <GuestCounter
          title="Children"
          description="Ages 2 — 12"
          count={this.state.childs}
          onRemove={this.remove.bind(this, "childs")}
          onAdd={this.add.bind(this, "childs")}
        />

        <GuestCounter
          title="Infants"
          description="Under 2"
          count={this.state.infants}
          onRemove={this.remove.bind(this, "infants")}
          onAdd={this.add.bind(this, "infants")}
        />
      </Filter>
    );
  }
}

GuestFilter.propTypes = {
  adults: PropTypes.number,
  childs: PropTypes.number,
  infants: PropTypes.number,
  isShow: PropTypes.boolean,
  onToggle: PropTypes.func,
  onApply: PropTypes.func
};
