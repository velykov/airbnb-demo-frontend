import React from 'react';
import styled from 'styled-components';
import { Col } from 'react-flexbox-grid';

import close from './close.svg';

const Actions = styled.div`
  display: none;
  background: white;
  height: 48px;
  display: flex;
  font-size: 14px;

  @media screen and (min-width: 576px) {
    display: flex;
    position: absolute;
    left: 0;
    bottom: 15px;
    right: 0;
  }
`;

const Action = styled.button`
  height: 64px;
  width: 110px;
  font-size: 16px;
  background: transparent;
  border: none;
`;

const Cancel = styled(Action)`
  font: normal 16px/19px Circular_Air-Book;
  color: #636363;
`;

const Apply = styled(Action)`
  font: normal 16px/19px Circular_Air-Book;
  margin-left: auto;
  color: #0f7276;
`;

const CancelButton = styled.img`
  padding: 16px 0px;
  width: 16px;
  height: 16px;
`;

const ResetButton = styled.button`
  font: normal 14px/16px Circular_Air-Book;
  background: transparent;
  border: none;
  color: #0f7276;
  height: 100%;
  padding: 0;
`;

const ActionTitle = styled.p`
  font: normal 14px/16px Circular_Air-Book;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #383838;
`;

const OpenedBlock = styled.div`
  border-radius: 4px;
  z-index: 11;
  background: #ffffff;
  box-sizing: border-box;
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  @media screen and (min-width: 576px) {
    position: absolute;
    top: 8px;
    left: 0px;
    right: initial;
    bottom: initial;
    border: 1px solid rgba(72, 72, 72, 0.2);
    box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
    padding-top: 0;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  height: calc(100% - 18px);
  width: 100%;

  @media screen and (min-width: 576px) {
    position: initial;
    height: initial;
    width: initial;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  @media screen and (min-width: 576px) {
    position: initial;
  }
`;

const Wrapper = styled.div`position: relative;`;

export default props => (
  <Wrapper>
    {props.selected && (
      <OpenedBlock>
        <Col xs={12} className="hidden-sm hidden-md hidden-lg hidden-xl">
          <Actions>
            <CancelButton src={close} onClick={props.cancel} />
            <ActionTitle className="col-xs">{props.mobileLabel}</ActionTitle>
            <ResetButton onClick={props.reset}>Reset</ResetButton>
          </Actions>
        </Col>
        <ContentWrapper>
          <Content>{props.content}</Content>
        </ContentWrapper>
        {props.controls && (
          <Col sm={12} className="hidden-xs">
            <Actions>
              <Cancel onClick={props.cancel}>Cancel</Cancel>
              <Apply onClick={props.apply}>Apply</Apply>
            </Actions>
          </Col>
        )}
      </OpenedBlock>
    )}
  </Wrapper>
);
