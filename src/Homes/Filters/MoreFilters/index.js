import React from "react";
import Filter from "../Filter";
import filters from "../filterNames";
import RoomFilter from "../RoomsFilter/RoomFilter";
import PriceFilter from "../PriceFilter/PriceFilter";
import GuestCounter from "../GuestsFilter/GuestCounter";
import Checkbox from "./Checkbox";
import arrow from "./arrow.svg";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 16px;
  box-shadow: 0 -0.5px rgba(72, 72, 72, 0.3);
  padding: 40px 8px 0;
  margin-bottom: 61px;
  @media (min-width: 320px) {
    position: absolute;
    top: 0;
    bottom: 32px;
    left: 0;
    right: 0;
    overflow-y: scroll;
  }
`;

const Header = styled.div`
  font: normal 18px/21px Circular_Air-Book;
  color: #383838;
  margin-bottom: 24px;
`;

const AccordeonHeader = styled(Header)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const Content = styled.div`
  padding-bottom: 16px;
  margin-bottom: 32px;
  box-shadow: 0 0.5px rgba(72, 72, 72, 0.3);
`;

const Title = styled.div`
  font: lighter 16px/19px Circular_Air-Light;
  color: #383838;
  @media (min-width: 768px) {
    // font-size: 20px;
  }
`;

const SeeAllLink = styled.a`
    color: #0F7276;
    font: normal 14px/16px Circular_Air-Book;
    &:after {
        content: url("${arrow}") ;
        margin-left: 4px;
    }
`;

const bedRoomTypes = {
  bedrooms: "bedrooms",
  beds: "beds",
  bathrooms: "bathrooms"
};

export default class extends React.Component {
  state = {
    entireHome: this.props.filters.entireHome,
    privateRoom: this.props.filters.privateRoom,
    sharedRoom: this.props.filters.sharedRoom,

    startPrice: this.props.filters.startPrice,
    endPrice: this.props.filters.endPrice,

    bedrooms: this.props.filters.bedrooms,
    beds: this.props.filters.beds,
    bathrooms: this.props.filters.bathrooms,

    instantBook: this.props.filters.instantBook,
    superhost: this.props.filters.superhost,

    amenities: this.props.filters.amenities,
    facilities: this.props.filters.facilities
  };

  handleApply = () => {
    this.props.onApply(this.state);
    this.handleToggle();
  };

  handleReset = () => {
    this.setState({
      entireHome: false,
      privateRoom: false,
      sharedRoom: false,
      startPrice: this.props.minPrice,
      endPrice: this.props.maxPrice,
      bedrooms: this.props.bedrooms,
      beds: this.props.beds,
      bathrooms: this.props.bathrooms,
      instantBook: this.props.instantBook,
      superhost: this.props.superhost,
      amenities: {},
      facilities: {}
    });
  };

  handleCancel = () => {
    this.setState({});
    this.handleToggle();
  };

  handleToggle = () => {
    this.props.onToggle(filters.more);
  };

  handleRemove = type => {
    const value = this.state[type];
    this.setState({
      [type]: value > 0 ? value - 1 : 0
    });
  };

  handleAdd = type => {
    this.setState({
      [type]: this.state[type] + 1
    });
  };

  getLabel = () => {
    if (!this.props.isShow) return "More";

    const activeFiltersCount = Object.keys(this.state).reduce((result, key) => {
      const value = this.state[key];
      const typeOf = typeof value;
      if (typeOf === "boolean") {
        result += value ? 1 : 0;
      } else if (typeOf === "number") {
        if (key === "startPrice") {
          result += value > this.props.minPrice ? 1 : 0;
        } else if (key === "endPrice") {
          result += value < this.props.maxPrice ? 1 : 0;
        } else result += value > 0 ? 1 : 0;
      } else if (typeOf === "object") {
        Object.keys(value).forEach(p => {
          result += p ? 1 : 0;
        });
      }
      return result;
    }, 0);

    return `All filters (${activeFiltersCount})`;
  };

  handleChange = (filter, value) => {
    //TODO
    this.setState({
      [filter]: !this.state[filter]
    });
  };

  handleChangePrices = result => {
    this.setState({
      startPrice: result.values[0],
      endPrice: result.values[1]
    });
  };

  render() {
    return (
      <Filter
        label={this.getLabel()}
        className={this.props.className}
        isShow={this.props.isShow}
        isSelected={this.props.isSelected}
        onToggle={this.handleToggle}
        onApply={this.handleApply}
        onReset={this.handleReset}
        onCancel={this.handleCancel}
        mdWidth={326}
        mdHeight={274}
        resetTitle="Clear All"
        saveBtnTitle="See homes"
      >
        <Wrapper>
          <Content className="hidden-lg">
            <Header>Room type</Header>
            <RoomFilter
              iconClassName="hidden-xs"
              entireHome={this.state.entireHome}
              privateRoom={this.state.privateRoom}
              sharedRoom={this.state.sharedRoom}
              onChange={this.handleChange}
            />
          </Content>
          <Content>
            <Header>Price range</Header>
            <PriceFilter
              minPrice={this.props.minPrice}
              maxPrice={this.props.maxPrice}
              startPrice={this.state.startPrice}
              endPrice={this.state.endPrice}
              onChange={this.handleChangePrices}
            />
          </Content>
          <Content>
            <Header>Rooms and beds</Header>
            <GuestCounter
              count={this.state.bedrooms}
              onRemove={this.handleRemove.bind(this, bedRoomTypes.bedrooms)}
              onAdd={this.handleAdd.bind(this, bedRoomTypes.bedrooms)}
            >
              <Title>Bedrooms</Title>
            </GuestCounter>
            <GuestCounter
              count={this.state.beds}
              onRemove={this.handleRemove.bind(this, bedRoomTypes.beds)}
              onAdd={this.handleAdd.bind(this, bedRoomTypes.beds)}
            >
              <Title>Beds</Title>
            </GuestCounter>
            <GuestCounter
              count={this.state.bathrooms}
              onRemove={this.handleRemove.bind(this, bedRoomTypes.bathrooms)}
              onAdd={this.handleAdd.bind(this, bedRoomTypes.bathrooms)}
            >
              <Title>Bathrooms</Title>
            </GuestCounter>
          </Content>
          <Content>
            <Header>More options</Header>
            <Checkbox
              title="Instant Book"
              description="Secure a reservation instantly."
              link="Learn more"
              linkTo="#"
              onChange={this.handleChange.bind(this, "instantBook")}
              isChecked={this.state.instantBook}
            />
            <Checkbox
              title="Superhost"
              description="Stay with recognized hosts."
              link="Learn more"
              linkTo="#"
              onChange={this.handleChange.bind(this, "superhost")}
              isChecked={this.state.superhost}
            />
          </Content>
          <Content>
            <AccordeonHeader>
              Amenities <SeeAllLink>See all</SeeAllLink>
            </AccordeonHeader>
          </Content>
          <Content>
            <AccordeonHeader>
              Facilities <SeeAllLink>See all </SeeAllLink>
            </AccordeonHeader>
          </Content>
        </Wrapper>
      </Filter>
    );
  }
}
