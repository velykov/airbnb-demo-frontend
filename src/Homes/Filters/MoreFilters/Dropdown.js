import React from "react";
import styled from "styled-components";

import close from "../close.svg";

const Wrapper = styled.div`
  position: relative;
`;

const Dropdown = styled.div`
  border-radius: 4px;
  background: #fff;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  @media (min-width: 768px) {
    top: 136px;
  }

  @media (min-width: 992px) {
    width: 700px;
  }
`;

const Header = styled.div`
  padding: 16px 8px 0;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font: normal 14px/16px Circular_Air-Book;
`;

const Close = styled.img`
  width: 16px;
  height: 16px;
`;

const Title = styled.span`
  font: normal 14px/16px Circular_Air-Book;
  color: #383838;
  flex-grow: 0;
`;

const Reset = styled.a`
  font: normal 14px/16px Circular_Air-Book;
  color: #0f7276;
`;

const Action = styled.button`
  height: 64px;
  width: 110px;
  font-size: 16px;
  background: transparent;
  border: none;
  justify-content: center;
  margin: 0;
  padding: 0;
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
  color: #fff;
  background-color: #008489;
  height: 48px;
  width: 147px;
  border-radius: 4px;
`;

const Save = styled.button`
  font: normal 18px/21px Circular_Air-Bold;
  background: #ff5a5f;
  border: none;
  border-radius: 4px;
  padding: 12px 0;
  width: 320px;
  color: #fff;

  @media (min-width: 768px) {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -1px #d5d5d5;
  padding: 8px;

  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font: normal 14px/16px Circular_Air-Book;
  z-index: 10;
  @media (min-width: 320px) {
    display: ${props =>
      props.hideXsFooter && window.innerWidth < 768 ? "none" : "flex"};
  }

  @media (min-width: 768px) {
    padding: 0;
    box-shadow: none;
    justify-content: center;
  }

  @media (min-width: 992px) {
    justify-content: flex-end;
    padding-right: 16px;
  }
`;

export default props => (
  <Wrapper>
    {props.isShow && (
      <Dropdown>
        <Header>
          <Actions>
            <Close src={close} onClick={props.cancel} />
            <Title>{props.title}</Title>
            <Reset onClick={props.reset}>
              {props.resetBtnTitle ? props.resetBtnTitle : "Reset"}
            </Reset>
          </Actions>
        </Header>
        <ContentWrapper>
          <Content>{props.content}</Content>
        </ContentWrapper>
        <Footer hideXsFooter={props.hideXsFooter}>
          <Cancel onClick={props.cancel}>Cancel</Cancel>
          <Apply onClick={props.apply}>See homes</Apply>
          <Save onClick={props.apply}>
            {props.saveBtnTitle ? props.saveBtnTitle : "Save"}
          </Save>
        </Footer>
      </Dropdown>
    )}
  </Wrapper>
);
