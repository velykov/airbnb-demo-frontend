import React from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";

const MAX_LG_FIXED_SIZE = 996;

const Wrapper = styled.div`
  @media (min-width: 992px) {
    margin: -24px 0;
    height: ${() => window.innerHeight + 72}px;
    width: ${() => window.innerWidth - MAX_LG_FIXED_SIZE}px;
  }
`;

export default props => {
  return (
    <Wrapper>
      <GoogleMapReact defaultCenter={props.center} defaultZoom={props.zoom} />
    </Wrapper>
  );
};
