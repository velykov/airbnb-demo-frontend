import React from "react";
import moment from "moment";
import styled from "styled-components";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DayPickerRangeController } from "react-dates";
import { Row as GRow, Col } from "react-flexbox-grid";

import "./_datepicker.css";

const Wrapper = styled.div`
  height: 100%;
  margin-top: 0;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    height: calc(100% - 64px);
    width: 100%;
  }
`;

const Row = styled(GRow)`
  height: 100%;
  padding-bottom: 110px;

  @media screen and (min-width: 768px) {
    padding-bottom: 50px;
  }
`;

export default props => (
  <Wrapper>
    <Row>
      <Col lg={12} className="hidden-xs hidden-sm hidden-md">
        <DayPickerRangeController
          {...props}
          isDayBlocked={day => day.isBefore(moment(), "day")}
          numberOfMonths={2}
          hideKeyboardShortcutsPanel
        />
      </Col>

      <Col md={12} className="hidden-xs hidden-lg hidden-xl">
        <DayPickerRangeController
          {...props}
          isDayBlocked={day => day.isBefore(moment(), "day")}
          numberOfMonths={1}
          hideKeyboardShortcutsPanel
        />
      </Col>

      <Col xs={12} className="hidden-sm hidden-md hidden-lg hidden-xl">
        <DayPickerRangeController
          {...props}
          isDayBlocked={day => day.isBefore(moment(), "day")}
          orientation="verticalScrollable"
          numberOfMonths={2}
          hideKeyboardShortcutsPanel
        />
      </Col>
    </Row>
  </Wrapper>
);
