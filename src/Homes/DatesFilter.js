import React from "react";
import PropTypes from "prop-types";
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from "react-dates";
import "react-dates/initialize";
import styled from "styled-components";
import close from "./close.svg";
import "react-dates/lib/css/_datepicker.css";
import "./datePicker.css";
import moment from "moment";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background-color: #fff;
`;

const Header = styled.div`
  padding: 16px 8px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  maring-bottom: 40px;
`;

const Title = styled.span`
  font: normal 14px/16px Circular_Air-Book;
  color: #383838;
`;

const Button = styled.a`
  font: normal 14px/16px Circular_Air-Book;
  color: #0f7276;
  pointer: cursor;
`;

const Body = styled.div`
  padding: 0 8px;
`;

const Breadcrumbs = styled.div``;

export default class DatesFilter extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickClose = props.onClose;
    this.onDatesChange = props.onDatesChange;
    this.handleDatesChange = this.handleDatesChange.bind(this);

    this.state = {
      startDate: undefined,
      endDate: undefined,
      focusedInput: "START_DATE"
    };
  }

  handleDatesChange(startDate, endDate) {
    ({ startDate, endDate }) => this.setState({ startDate, endDate });
  }

  handleResetClick() {
    this.setState({});
  }

  render() {
    return (
      <Container>
        <Header>
          <Nav>
            <Button onClick={this.handleClickClose}>
              <img src={close} alt="Close" />
            </Button>
            <Title>When</Title>
            <Button onclick={this.handleResetClick}>Reset</Button>
          </Nav>
          <Breadcrumbs />
        </Header>
        <Body>
          <DateRangePicker
            orientation="vertical"
            hideKeyboardShortcutsPanel
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onDatesChange={({ startDate, endDate }) =>
              this.setState({ startDate, endDate })
            }
            focusedInput={this.state.focusedInput}
            onFocusChange={focusedInput => this.setState({ focusedInput })}
          />
        </Body>
      </Container>
    );
  }
}

DatesFilter.propTypes = {
  onClose: PropTypes.func,
  onDatesChange: PropTypes.func
};
