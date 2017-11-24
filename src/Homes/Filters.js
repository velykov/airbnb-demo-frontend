import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { ContentWrapper } from "../UI";
import DatesFilter from "./DatesFilter";
import GuestsFilter from "./GuestsFilter";
import MoreFilters from "./MoreFilters";
import RoomsFilter from "./RoomsFilter";
import styled from "styled-components";
import constants from "./constants";

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
  top: 81px;
  width: 100%;
  background-color: #fff;
  z-index: 200;
`;

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
    sharedRoom: false
  };

  handleFilterChange = activeFilter => {
    const isOpen = activeFilter !== this.state.activeFilter;
    this.setState({
      activeFilter: isOpen ? activeFilter : undefined
    });
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
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  onToggle={this.handleFilterChange}
                  onApply={(startDate, endDate) =>
                    this.setState({ startDate, endDate })
                  }
                />
                <GuestsFilter
                  isShow={this.state.activeFilter === constants.guests}
                  adults={this.state.adults}
                  childs={this.state.childs}
                  infants={this.state.infants}
                  onToggle={this.handleFilterChange}
                  onApply={guests => this.setState(guests)}
                />
                <RoomsFilter
                  label="Room type"
                  entireHome={this.state.entireHome}
                  privateRoom={this.state.privateRoom}
                  sharedRoom={this.state.sharedRoom}
                  isShow={this.state.activeFilter === constants.rooms}
                  onToggle={this.handleFilterChange}
                  onApply={rooms => this.setState(rooms)}
                />
                <Button lgShow={true}>Room type</Button>
                <Button lgShow={true}>Price</Button>
                <Button lgShow={true}>Instant book</Button>
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
