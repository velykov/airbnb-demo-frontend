import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { ContentWrapper } from "../../UI";
import DatesFilter from "./DatesFilter";
import GuestsFilter from "./GuestsFilter";
import MoreFilters from "./MoreFilters";
import RoomsFilter from "./RoomsFilter";
import PriceFilter from "./PriceFilter";
import InstantBookFilter from "./InstantFilter";
import styled from "styled-components";
import constants from "./filterNames";

const Button = styled.button`
  font: normal 14px/16px Circular_Air-Book;
  color: #383838;
  text-align: left;
  padding: 7px 16px;
  border-radius: 4px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  background-color: transparent;
  margin-right: 12px;
`;

const Aside = styled.aside`
  padding: 12px 0;
  box-shadow: 0 0.5px rgba(72, 72, 72, 0.3);
  position: fixed;
  top: 81px;
  width: 100%;
  background-color: #fff;
  z-index: 200;
`;

const minPrice = 10,
  maxPrice = 1000;

export default class Filters extends React.Component {
  state = {
    activeFilter: undefined,
    startDate: undefined,
    endDate: undefined,

    adults: 0,
    childs: 0,
    infants: 0,

    entireHome: false,
    privateRoom: false,
    sharedRoom: false,

    startPrice: minPrice,
    endPrice: maxPrice
  };

  handleFilterChange = activeFilter => {
    const isOpen = activeFilter !== this.state.activeFilter;
    this.setState({
      activeFilter: isOpen ? activeFilter : undefined
    });
  };

  isSelectedDates = state => {
    return state.startDate || state.endDate;
  };

  isSelectedGuests = state => {
    return state.adults || state.childs || state.infants;
  };

  isSelectedRooms = state => {
    return state.entireHome || state.privateRoom || state.sharedRoom;
  };

  isSelectedPrice = state => {
    return state.startPrice > minPrice || state.endPrice < maxPrice;
  };

  render() {
    return (
      <Aside>
        <ContentWrapper>
          <Grid>
            <Row>
              <Col xs={12}>
                <DatesFilter
                  isShow={this.state.activeFilter === constants.dates}
                  isSelected={this.isSelectedDates(this.state)}
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  onToggle={this.handleFilterChange}
                  onApply={(startDate, endDate) =>
                    this.setState({ startDate, endDate })
                  }
                />

                <GuestsFilter
                  isShow={this.state.activeFilter === constants.guests}
                  isSelected={this.isSelectedGuests(this.state)}
                  adults={this.state.adults}
                  childs={this.state.childs}
                  infants={this.state.infants}
                  onToggle={this.handleFilterChange}
                  onApply={guests => this.setState(guests)}
                />

                <RoomsFilter
                  className="hidden-xs hidden-md"
                  isShow={this.state.activeFilter === constants.rooms}
                  isSelected={this.isSelectedRooms(this.state)}
                  entireHome={this.state.entireHome}
                  privateRoom={this.state.privateRoom}
                  sharedRoom={this.state.sharedRoom}
                  onToggle={this.handleFilterChange}
                  onApply={rooms => this.setState(rooms)}
                />

                <PriceFilter
                  className="hidden-xs hidden-md"
                  isSelected={this.isSelectedPrice(this.state)}
                  isShow={this.state.activeFilter === constants.price}
                  min={minPrice}
                  max={maxPrice}
                  startPrice={this.state.startPrice}
                  endPrice={this.state.endPrice}
                  onToggle={this.handleFilterChange}
                  onApply={prices => this.setState(prices)}
                />

                <InstantBookFilter
                  className="hidden-xs hidden-md"
                  // isSelected={this.isSelectedInstant(this.state)}
                  isShow={this.state.activeFilter === constants.instant}
                  instantBook={this.state.instantBook}
                  onToggle={this.handleFilterChange}
                  onApply={isBook => this.setState(isBook)}
                />

                <MoreFilters
                  isShow={this.state.activeFilter === constants.more}
                  onToggle={this.handleFilterChange}
                />
              </Col>
            </Row>
          </Grid>
        </ContentWrapper>
      </Aside>
    );
  }
}
