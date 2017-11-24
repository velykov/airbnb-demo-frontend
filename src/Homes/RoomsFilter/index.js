import React from "react";
import Filter from "../GuestsFilter/Filter";
import RoomType from "./RoomType";
import filters from "../constants";

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

  handleReset = () => {
    this.setState({
      entireHome: false,
      privateRoom: false,
      sharedRoom: false
    });
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

  render() {
    return (
      <Filter
        controls
        label={this.props.label}
        isShow={this.props.isShow}
        onToggle={this.handleToggle}
        onApply={this.handleApply.bind(this)}
        onReset={this.handleReset}
        onCancel={this.handleCancel.bind(this)}
      >
        <RoomType
          isActive={this.state.entireHome}
          type="home"
          title="Entire home"
          description="Have a place to yourself"
          onChange={this.handleChange.bind(this, "entireHome")}
        />
        <RoomType
          isActive={this.state.privateRoom}
          type="private"
          title="Private room"
          description="Have your own room and share move common spaces"
          onChange={this.handleChange.bind(this, "privateRoom")}
        />
        <RoomType
          isActive={this.state.sharedRoom}
          type="shared"
          title="SharedRoom"
          description="Stay in a shared space, like a common room"
          onChange={this.handleChange.bind(this, "sharedRoom")}
        />
      </Filter>
    );
  }
}
