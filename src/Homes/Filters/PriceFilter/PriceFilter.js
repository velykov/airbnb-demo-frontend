import React from "react";
import Rheostat from "rheostat";
import styled from "styled-components";
import "./slider.css";
import price from "./price.svg";
import toTitleLabel from "./labels";

const Title = styled.div`
  color: #383838;
  font: lighter 16px/19px Circular_Air-Light;
  margin-bottom: 8px;
`;

const Description = styled.div`
  color: #383838;
  font: lighter 12px/14px Circular_Air-Light;
  margin-bottom: 32px;
`;

const Container = styled.div`
  padding-right: 32px;
  background: url(${price}) 32px center no-repeat;
  padding-top: 78px;
`;

export default props => {
  return (
    <div>
      <Title>{toTitleLabel(props)}</Title>
      <Description>The average nightly price is $75.</Description>
      <Container>
        <Rheostat
          min={props.minPrice}
          max={props.maxPrice}
          values={[props.startPrice, props.endPrice]}
          onChange={props.onChange}
        />
      </Container>
    </div>
  );
};
