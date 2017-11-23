import React from "react";
import PropTypes from "prop-types";
import Filter from "./Filter";
import GuestCounter from "./GuestCounter";

export default class MoreFilter extends React.Component {
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
    let guests = this.state[guestType];
    this.setState({
      [guestType]: guests > 0 ? --guests : 0
    });
  };

  onAdd = guestType => {
    this.setState({
      [guestType]: this.state[guestType] + 1
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
        <p>content will be here</p>
      </Filter>
    );
  }
}

MoreFilter.propTypes = {
  initialState: PropTypes.object,
  isShow: PropTypes.boolean,
  onClose: PropTypes.func,
  onApply: PropTypes.func
};
