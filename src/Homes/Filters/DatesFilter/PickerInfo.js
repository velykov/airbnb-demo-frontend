import React from "react";
import styled from "styled-components";

import arrow from "./arrowRight.svg";

const PickedDate = styled.span`
  font-size: 18px;
  color: ${props => (props.selected ? "#0F7276;" : "#636363")};
  margin: 8px;
  padding-bottom: 2px;
  border-bottom: 1px solid ${props => (props.selected ? "#008489" : "#ffffff")};
  font-family: inherit;
  font-weight: 300;
`;

const ArrowIcon = styled.img`
  margin: 8px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export default ({ startDate, endDate, ...props }) => (
  <Wrapper>
    <PickedDate selected={!startDate && !endDate}>
      {startDate ? startDate.format("MMM Do") : "Check-in"}
    </PickedDate>

    <ArrowIcon src={arrow} />

    <PickedDate selected={startDate && !endDate}>
      {endDate ? endDate.format("MMM Do") : "Check-out"}
    </PickedDate>
  </Wrapper>
);
