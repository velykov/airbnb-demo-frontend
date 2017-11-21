import React from "react";
import DateFilter from "./DateFilter";
import PropTypes from "prop-types";

export default class DatesFilter extends React.Component {
  state = {
    isShow: false
  };

  render() {
    return (
      <DateFilter
        closeDropdown={() => this.setState({ isShow: false })}
        isShow={this.state.isShow}
        onApply={(startDate, endDate) => this.setState({ startDate, endDate })}
      />
    );
  }
}

DatesFilter.propTypes = {
  onClose: PropTypes.func
};
