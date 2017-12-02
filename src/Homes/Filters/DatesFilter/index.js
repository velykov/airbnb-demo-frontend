import React from "react";

import Filter from "../Filter";
import PickerInfo from "./PickerInfo";
import DatesPicker from "./DatesPicker";
import { toDateLabel } from "./labels";
import { START_DATE } from "react-dates/constants";
import filters from "../filterNames";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  bottom: 0;

  @media (min-width: 768px) {
    top: 0;
  }
`;

export default class extends React.Component {
  state = {
    selectedStartDate: this.props.startDate,
    selectedEndDate: this.props.endDate,
    focusedInput: START_DATE
  };

  handleApply = () => {
    this.props.onApply(
      this.state.selectedStartDate,
      this.state.selectedEndDate
    );
    this.handleToggle();
  };

  handleCancel = () => {
    if (
      this.state.selectedStartDate === this.props.startDate &&
      this.state.selectedEndDate === this.props.endDate
    ) {
      return this.handleToggle();
    }

    this.setState(
      {
        selectedStartDate: this.props.startDate,
        selectedEndDate: this.props.endDate
      },
      this.handleApply
    );
  };

  handleToggle = () => {
    this.props.onToggle(filters.dates);
  };

  handleReset = () => {
    this.setState(() => ({
      selectedStartDate: undefined,
      selectedEndDate: undefined
    }));
  };

  handleChange = props => {
    this.setState(
      {
        selectedStartDate: props.startDate,
        selectedEndDate: props.endDate
      },
      () => {
        if (this.isMobile() && props.endDate) this.handleApply();
      }
    );
  };

  isMobile = () => {
    return window.innerWidth < 768;
  };

  render() {
    return (
      <Filter
        label={toDateLabel(this.state, this.props.isShow)}
        isShow={this.props.isShow}
        isSelected={this.props.isSelected}
        controls={true}
        onCancel={this.handleCancel}
        onApply={this.handleApply}
        onReset={this.handleReset}
        onToggle={this.handleToggle}
        hideXsFooter={true}
        mdWidth={326}
        mdHeight={368}
        lgWidth={632}
        lgHeight={406}
        tabindex={this.props.tabindex}
      >
        <Wrapper>
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
            onDatesChange={this.handleChange}
          />
        </Wrapper>
      </Filter>
    );
  }
}
