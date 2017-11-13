import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import place from "./place.png";
import styled from "styled-components";

const Wrapper = styled.div`
  @media (min-width: 992px) {
    margin: -24px 0;
    height: ${() => window.innerHeight + 24 * 3}px;
    width: ${() => window.innerWidth - 996}px;
  }
`;

class SimpleMap extends Component {
  static defaultProps = {
    center: { lat: 47.33333, lng: 13.33333 },
    zoom: 7
  };

  render() {
    return (
      <Wrapper>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <div lat={47.33333} lng={13.33333}>
            <img src={place} alt="Place" />
          </div>
        </GoogleMapReact>
      </Wrapper>
    );
  }
}

export default SimpleMap;
