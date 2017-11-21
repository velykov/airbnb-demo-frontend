import React from "react";
import PropTypes from "prop-types";
import Filter from "./Filter";
import GuestCounter from "./GuestCounter";

export default class GuestFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adults: props.adults,
      childs: props.childs,
      infants: props.infants
    };
  }

  onApply = () => {
    this.props.onApply(this.state);
  };

  onReset = () => {
    this.setState({
      adults: 0,
      childs: 0,
      infants: 0
    });
  };

  onCancel = () => {
    this.setState({
      ...this.props.initialState
    });
  };

  onRemove = guestType => {
    this.setState({
      [guestType]: this.state[guestType] > 0 ? --this.state[guestType] : 0
    });
  };

  onAdd = guestType => {
    this.setState({
      [guestType]: ++this.state[guestType]
    });
  };

  render() {
    return (
      <Filter
        controls
        onApply={this.onApply}
        onReset={this.onReset}
        onCancel={this.onCancel}
      >
        <GuestCounter
          title="Adult"
          count={this.state.adults}
          onRemove={this.onRemove.bind(this, "adults")}
          onAdd={this.onAdd.bind(this, "adults")}
        />

        <GuestCounter
          title="Children"
          description="Ages 2 — 12"
          count={this.state.childs}
          onRemove={this.onRemove.bind(this, "childs")}
          onAdd={this.onAdd.bind(this, "childs")}
        />

        <GuestCounter
          title="Infants"
          description="Under 2"
          count={this.state.infants}
          onRemove={this.onRemove.bind(this, "infants")}
          onAdd={this.onAdd.bind(this, "infants")}
        />
      </Filter>
    );
  }
}

GuestFilter.propTypes = {
  initialState: PropTypes.object,
  isShow: PropTypes.boolean,
  onClose: PropTypes.func,
  onApply: PropTypes.func
};