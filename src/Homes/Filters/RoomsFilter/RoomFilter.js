import React from "react";
import RoomType from "./RoomType";
import roomTypes from "./types";
import privat from "./private.svg";
import shared from "./shared.svg";
import home from "./home.svg";

export default props => {
  return (
    <div>
      <RoomType
        isActive={props.entireHome}
        title="Entire home"
        description="Have a place to yourself"
        icon={home}
        iconClassName={props.iconClassName}
        onChange={props.onChange.bind(this, roomTypes.entireHome)}
      />
      <RoomType
        isActive={props.privateRoom}
        title="Private room"
        description="Have your own room and share move common spaces"
        icon={privat}
        iconClassName={props.iconClassName}
        onChange={props.onChange.bind(this, roomTypes.privateRoom)}
      />
      <RoomType
        isActive={props.sharedRoom}
        title="SharedRoom"
        description="Stay in a shared space, like a common room"
        icon={shared}
        iconClassName={props.iconClassName}
        onChange={props.onChange.bind(this, roomTypes.sharedRoom)}
      />
    </div>
  );
};
