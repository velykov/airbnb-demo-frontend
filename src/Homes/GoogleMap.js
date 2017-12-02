import React from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";

const maxLgFixedSize = 996;

const Wrapper = styled.div`
  @media (min-width: 992px) {
    position: fixed;
    top: 136px;
    right: 0;
    height: calc(100% - 136px);
    width: ${() => 336 + (window.innerWidth - maxLgFixedSize) / 2}px;
  }
`;

export default props => {
  return (
    <Wrapper>
      <GoogleMapReact
        bootstrapURLKeys={{
          // key: process.env.GOOGLE_MAP_KEY,
          language: "ru"
        }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
      />
    </Wrapper>
  );
};
