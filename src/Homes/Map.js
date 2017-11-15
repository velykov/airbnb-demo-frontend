import React from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";

const MAX_LG_FIXED_SIZE = 996;

const Wrapper = styled.div`
  @media (min-width: 992px) {
    position: fixed;
    top: 136px;
    right: 0;
    height: calc(100% - 136px);
    width: ${() =>
      MAX_LG_FIXED_SIZE * 4 / 12 +
      (window.innerWidth - MAX_LG_FIXED_SIZE) / 2}px;
  }
`;

export default props => {
  return (
    <Wrapper>
      <GoogleMapReact defaultCenter={props.center} defaultZoom={props.zoom} />
    </Wrapper>
  );
};
