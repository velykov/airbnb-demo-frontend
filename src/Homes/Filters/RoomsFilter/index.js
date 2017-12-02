import React from "react";
import Filter from "../Filter";
import RoomFilter from "./RoomFilter";
import filters from "../filterNames";
import styled from "styled-components";

const Content = styled.div`
  padding: 24px 16px 0;
`;

export default class extends React.Component {
  state = {
    entireHome: this.props.entireHome,
    privateRoom: this.props.privateRoom,
    sharedRoom: this.props.sharedRoom
  };

  handleApply = () => {
    this.props.onApply(this.state);
    this.handleToggle();
  };

  handleCancel = () => {
    this.setState({
      entireHome: this.props.entireHome,
      privateRoom: this.props.privateRoom,
      sharedRoom: this.props.sharedRoom
    });
    this.handleToggle();
  };

  handleToggle = () => {
    this.props.onToggle(filters.rooms);
  };

  handleChange = roomType => {
    this.setState({
      [roomType]: !this.state[roomType]
    });
  };

  getLabel = state => {
    const count = Object.keys(state).reduce((result, filter) => {
      return (result += state[filter] ? 1 : 0);
    }, 0);
    return `Room type ${count > 0 ? "· " + count : ""}`;
  };

  render() {
    return (
      <Filter
        label={this.getLabel(this.state)}
        className={this.props.className}
        isShow={this.props.isShow}
        isSelected={this.props.isSelected}
        onToggle={this.handleToggle}
        onApply={this.handleApply.bind(this)}
        onCancel={this.handleCancel.bind(this)}
        mdWidth={326}
        mdHeight={274}
      >
        <Content>
          <RoomFilter
            entireHome={this.state.entireHome}
            privateRoom={this.state.privateRoom}
            sharedRoom={this.state.sharedRoom}
            onChange={this.handleChange}
          />
        </Content>
      </Filter>
    );
  }
}
