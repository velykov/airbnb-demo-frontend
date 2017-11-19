import React from "react";

import Filter from "./Filter";
import PickerInfo from "./PickerInfo";
import DatesPicker from "./DatesPicker";
import { toDateLabel } from "./labels";
import { START_DATE } from "react-dates/constants";

export default class extends React.Component {
  state = {
    selected: false,
    startDate: null,
    endDate: null,
    selectedStartDate: null,
    selectedEndDate: null,
    focusedInput: START_DATE
  };

  onApply = props => {
    this.props.closeDropdown();
    this.setState({
      selected: false,
      startDate: this.state.selectedStartDate,
      endDate: this.state.selectedEndDate
    });
    this.props.onApply(
      this.state.selectedStartDate,
      this.state.selectedEndDate
    );
  };

  onCancel = props => {
    this.props.closeDropdown();
    this.setState({
      selected: false,
      selectedStartDate: this.state.startDate,
      selectedEndDate: this.state.endDate
    });
  };

  onToggle = selected => {
    this.setState({ selected });
  };

  onReset = () => {
    this.setState(() => ({
      selectedStartDate: null,
      selectedEndDate: null
    }));
  };

  render() {
    return (
      <Filter
        className={this.props.className}
        label={toDateLabel(this.state)}
        mobileLabel="When"
        controls
        onCancel={this.onCancel}
        onToggle={this.onToggle}
        onApply={this.onApply}
        onReset={this.onReset}
        closeDropdown={() => this.props.closeDropdown()}
      >
        <PickerInfo
          startDate={this.state.selectedStartDate}
          endDate={this.state.selectedEndDate}
        />

        <DatesPicker
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput =>
            this.setState({ focusedInput: focusedInput || START_DATE })
          }
          startDate={this.state.selectedStartDate}
          endDate={this.state.selectedEndDate}
          onDatesChange={({ startDate, endDate }) => {
            this.setState({
              selectedStartDate: startDate,
              selectedEndDate: endDate
            });
          }}
        />
      </Filter>
    );
  }
}
