import React from "react";
import DateFilter from "./DateFilter";
import PropTypes from "prop-types";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

export default class DatesFilter extends React.Component {
  state = {
    isShow: false
  };

  render() {
    return (
      <DateFilter
        closeDropdown={() => this.setState({isShow: false})}
        isShow={this.state.isShow}
        onApply={(startDate, endDate) =>
          this.setState({ startDate, endDate })
        }
      />
    );
  }
}

DatesFilter.propTypes = {
  onClose: PropTypes.func
};
