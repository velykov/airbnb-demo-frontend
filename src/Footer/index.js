import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";

import { Img, Hr, Link } from "../commons/styled";

import arrow from "./arrow.svg";
import logo from "./logo.svg";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import twitter from "./twitter.svg";

const Title = styled.b`
  font: bold 15px/18px Circular_Air-Bold;
  margin-bottom: 8px;
`;

const Dropdown = styled.div`
  margin-bottom: 16px;
`;

const Selector = styled.select`
  width: 100%;
  height: 48px;
  padding: 0 40px 0 13px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  
  -webkit-appearance: none;
  -moz-appearance: none;
  background: #fff url('${arrow}') no-repeat;
  background-size: 20px;
  background-position: right 10px center;
  
  @media (min-width:320px) {
    font: lighter 12px/14px Circular_Air-Light;
  }

  @media (min-width:768px) {
    font: lighter 15px/18px Circular_Air-Light;
  }

  @media (min-width:992px) {
    font: lighter 18px/21px Circular_Air-Light;
  }
  
  &:focus{
    outline:0;
  }
`;

const Credits = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
`;

const Copyright = styled.span`
  margin-left: 12px;
  font: normal 15px/18px Circular_Air-Book;
  color: #636363;
`;

const FooterNav = styled.nav`
  display: flex;
  margin-top: 12px;
  font: normal 15px/18px Circular_Air-Book;
`;

const FooterLinks = styled(Col)`
  @media (min-width: 320px) {
    display: none;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const FooterLink = styled(Link)`
  text-align: left;

  @media (min-width: 768px) {
    font: normal 12px/14px Circular_Air-Book;
    margin-bottom: 11px;
  }

  @media (min-width: 992px) {
    font: normal 15px/18px Circular_Air-Book;
    margin-bottom: 8px;
  }
`;

const FooterHr = styled(Hr)`
  @media (min-width: 320px) {
    margin-top: 24px;
    margin-bottom: 18px;
  }

  @media (min-width: 768px) {
    margin-top: 38px;
    margin-bottom: 36px;
  }

  @media (min-width: 992px) {
    margin-top: 38px;
    margin-bottom: 36px;
  }
`;

const NavLink = styled(Link)`
  margin-right: 12px;
`;

export default function() {
  return (
    <footer>
      <Grid>
        <Row>
          <Col xs>
            <Hr marginTop={64} marginBottom={48} />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={3} lg={3}>
            <Grid>
              <Row>
                <Col xs={6} md={12} lg={12}>
                  <Dropdown>
                    <Selector name="language">
                      <option value="en">English</option>
                      <option value="ru">Russian</option>
                    </Selector>
                  </Dropdown>
                </Col>
                <Col xs={6} md={12} lg={12}>
                  <Dropdown>
                    <Selector name="currency">
                      <option value="usd">United States Dollar</option>
                      <option value="rub">Russian Rouble</option>
                    </Selector>
                  </Dropdown>
                </Col>
              </Row>
            </Grid>
          </Col>
          <FooterLinks md={2} mdOffset={1} xs={2} start="xs">
            <Title>Airbnb</Title>
            <FooterLink href="#">About us</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Press</FooterLink>
            <FooterLink href="#">Policies</FooterLink>
            <FooterLink href="#">Help</FooterLink>
            <FooterLink href="#">Diversity & Belonging</FooterLink>
          </FooterLinks>
          <FooterLinks md={2} mdOffset={1} xs={2} start="xs">
            <Title>Discover</Title>
            <FooterLink href="#">Trust & Safety</FooterLink>
            <FooterLink href="#">Travel Credit</FooterLink>
            <FooterLink href="#">Gift Cards</FooterLink>
            <FooterLink href="#">Airbnb Citizen</FooterLink>
            <FooterLink href="#">Business Travel</FooterLink>
            <FooterLink href="#">Guidebooks</FooterLink>
            <FooterLink href="#">Airbnbmag</FooterLink>
          </FooterLinks>
          <FooterLinks md={2} mdOffset={1} xs={2} start="xs">
            <Title>Hosting</Title>
            <FooterLink href="#">Why Host</FooterLink>
            <FooterLink href="#">Hospitality</FooterLink>
            <FooterLink href="#">Responsible Hosting</FooterLink>
            <FooterLink href="#">Community Center</FooterLink>
          </FooterLinks>
        </Row>
      </Grid>
      <FooterHr />
      <Grid>
        <Row middle="xs">
          <Col xs={12} md={3} lg={2}>
            <Credits>
              <Img src={logo} alt="logo" />
              <Copyright>© Airbnb Inc.</Copyright>
            </Credits>
          </Col>
          <Col xs={12} md={5} mdOffset={4} lg={4} lgOffset={6}>
            <FooterNav>
              <NavLink href="#">Terms</NavLink>
              <NavLink href="#">Privacy</NavLink>
              <NavLink href="#">Site map</NavLink>
              <NavLink href="#">
                <Img src={facebook} alt="facebook" />
              </NavLink>
              <NavLink href="#">
                <Img src={twitter} alt="twitter" />
              </NavLink>
              <NavLink href="#">
                <Img src={instagram} alt="instagram" />
              </NavLink>
            </FooterNav>
          </Col>
        </Row>
      </Grid>
    </footer>
  );
}
