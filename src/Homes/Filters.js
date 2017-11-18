import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { ContentWrapper } from "../UI";
import DatesFilter from "./DatesFilter";
import styled from "styled-components";

const Button = styled.button`
  font: normal 14px/16px Circular_Air-Book;
  color: #383838;
  text-align: left;
  padding: 7px 16px;
  border-radius: 4px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  background-color: transparent;
  margin-right: 12px;

  @media (min-width: 320px) {
    display: ${props => (props.lgShow ? "none" : "inline-block")};
  }

  @media (min-width: 992px) {
    display: inline-block;
  }
`;

const Aside = styled.aside`
  padding: 12px 0;
  box-shadow: 0 0.5px rgba(72, 72, 72, 0.3);
  position: fixed;
  top: 80px;
  width: 100%;
  background-color: #fff;
  z-index: 200;
`;

export default class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowDates: false,
      isShowGuests: false,
      isRoomTypes: false,
      isShowPrices: false,
      isShowBooks: false,
      isShowMoreFilters: false
    };

    this.handleDatesClick = this.handleDatesClick.bind(this);
    this.handleGuestsClick = this.handleGuestsClick.bind(this);
    this.handleRoomTypeClick = this.handleRoomTypeClick.bind(this);
    this.handlePriceClick = this.handlePriceClick.bind(this);
    this.handleBookClick = this.handleBookClick.bind(this);
    this.handleMoreFiltersClick = this.handleMoreFiltersClick.bind(this);
  }

  hideAllFiltersState() {
    return {
      isShowDates: false,
      isShowGuests: false,
      isRoomTypes: false,
      isShowPrices: false,
      isShowBooks: false,
      isShowMoreFilters: false,
      startDate: undefined,
      endDate: undefined
    };
  }

  handleDatesClick() {
    this.setState(prevState => ({
      ...this.hideAllFiltersState(),
      isShowDates: !prevState.isShowDates
    }));
  }

  handleGuestsClick() {
    this.setState(prevState => ({
      ...this.hideAllFiltersState(),
      isShowGuests: !prevState.isShowGuests
    }));
  }

  handleRoomTypeClick() {
    this.setState(prevState => ({
      ...this.hideAllFiltersState(),
      isShowRoomTypes: !prevState.isHowRoomTypes
    }));
  }

  handlePriceClick() {
    this.setState(prevState => ({
      ...this.hideAllFiltersState(),
      isShowPrices: !prevState.isShowPrices
    }));
  }

  handleBookClick() {
    this.setState(prevState => ({
      ...this.hideAllFiltersState(),
      isShowBooks: !prevState.isShowBooks
    }));
  }

  handleMoreFiltersClick() {
    this.setState(prevState => ({
      ...this.hideAllFiltersState(),
      isShowMoreFilters: !prevState.isShowMoreFilters
    }));
  }

  handleDatesChange(startDate, endDate) {
    ({ startDate, endDate }) => this.setState({ startDate, endDate });
  }

  render() {
    return (
      <Aside>
        <ContentWrapper>
          <Grid>
            <Row>
              <Col xs={12}>
                <Button onClick={this.handleDatesClick}>Dates</Button>
                <Button onClick={this.handleGuestsClick}>Guests</Button>
                <Button onClick={this.handleRoomTypeClick} lgShow={true}>
                  RoomType
                </Button>
                <Button onClick={this.handlePriceClick} lgShow={true}>
                  Price
                </Button>
                <Button onClick={this.handleBookClick} lgShow={true}>
                  Instant book
                </Button>
                <Button onClick={this.handleMoreFiltersClick}>
                  More filters
                </Button>
              </Col>
            </Row>
          </Grid>
        </ContentWrapper>
        {this.state.isShowDates && (
          <DatesFilter
            onClose={this.handleDatesClick}
            onDatesChange={this.handleDatesChange}
          />
        )}
      </Aside>
    );
  }
}
