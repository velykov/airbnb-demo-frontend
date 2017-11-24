import React from "react";
import styled from "styled-components";

import close from "./close.svg";

const Actions = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font: normal 14px/16px Circular_Air-Book;
  height: 48px;
  margin: 0 8px;

  @media (min-width: 768px) {
    display: flex;
    position: absolute;
    left: 0;
    bottom: 15px;
    width: 304px;
  }
`;

const Action = styled.button`
  height: 64px;
  width: 110px;
  font-size: 16px;
  background: transparent;
  border: none;
  justify-content: center;
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;

const Cancel = styled(Action)`
  font: normal 16px/19px Circular_Air-Book;
  color: #636363;
`;

const Apply = styled(Action)`
  font: normal 16px/19px Circular_Air-Book;
  color: #0f7276;
`;

const Save = styled.button`
  font: normal 18px/21px Circular_Air-Bold;
  background: #ff5a5f;
  border: none;
  border-radius: 4px;
  padding: 12px 132px;
  color: #fff;

  @media (min-width: 768px) {
    display: none;
  }
`;

const ActionClose = styled.img`
  padding: 0px;
  width: 16px;
  height: 16px;
`;

const ActionReset = styled.a`
  font: normal 14px/16px Circular_Air-Book;
  color: #0f7276;
`;

const ActionTitle = styled.span`
  font: normal 14px/16px Circular_Air-Book;
  color: #383838;
  flex-grow: 0;
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

  @media (min-width: 768px) {
    position: absolute;
    top: 8px;
    left: 0px;
    right: initial;
    bottom: initial;
    border: 1px solid rgba(72, 72, 72, 0.2);
    box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
    padding-top: 0;
    height: 291px;
    width: 326px;
  }
`;

const Header = styled.div`
  box-shadow: 0 0.5px rgba(72, 72, 72, 0.3);
  margin-bottom: 40px;
  height: 48px;

  @media (min-width: 320px) {
    display: block;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  box-shadow: 0 -1px #d5d5d5;
  padding: 8px 0;
  display: block;

  @media (min-width: 768px) {
    height: 64px;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  height: calc(100% - 18px);
  width: 100%;
  padding: 0 8px;

  @media (min-width: 768px) {
    position: initial;
    height: initial;
    width: initial;
    padding-top: 32px;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  @media screen and (min-width: 768px) {
    position: initial;
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

export default props => (
  <Wrapper>
    {props.isShow && (
      <OpenedBlock>
        <Header>
          <Actions>
            <ActionClose src={close} onClick={props.handleCancel} />
            <ActionTitle>{props.title}</ActionTitle>
            <ActionReset onClick={props.reset}>Reset</ActionReset>
          </Actions>
        </Header>
        <ContentWrapper>
          <Content>{props.content}</Content>
        </ContentWrapper>
        <Footer>
          <Actions>
            <Cancel onClick={props.handleCancel}>Cancel</Cancel>
            <Apply onClick={props.apply}>Apply</Apply>
            <Save onClick={props.apply}>Save</Save>
          </Actions>
        </Footer>
      </OpenedBlock>
    )}
  </Wrapper>
);
