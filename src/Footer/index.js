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

const Language = styled.div`
  margin-bottom: 16px;
  margin-left: -8px;

  @media (min-width: 768px) {
    margin-right: -8px;
  }

  @media (min-width: 992px) {
    margin-right: -12px;
  }
`;

const Currency = styled.div`
  margin-right: -10px;

  @media (min-width: 768px) {
    margin-left: -8px;
    margin-right: -8px;
  }

  @media (min-width: 992px) {
    margin-right: -12px;
  }
`;

const Selector = styled.select`
  width: 100%;
  
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  
  appearance: none;
  &::-ms-expand {
    display: none;
  }
  background: #fff url('${arrow}') no-repeat;
  background-size: 20px;
  background-position: right 10px center;
  
  @media (min-width: 320px) {
    font: lighter 12px/14px Circular_Air-Light;
    padding: 12px 8px;
    height: 40px;
  }

  @media (min-width: 768px) {
    font: lighter 15px/18px Circular_Air-Light;
    padding: 14px 8px 15px;
    height: 48px;
  }

  @media (min-width: 992px) {
    font: lighter 18px/21px Circular_Air-Light;
    padding: 12px 16px;
  }
  
  &:focus {
    outline: 0;
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

const Group = styled.div`
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
      <Hr marginTop={64} marginBottom={48} />
      <Grid>
        <Row>
          <Col xs={12} md={3} lg={3}>
            <Grid>
              <Row>
                <Col xs={6} md={12} lg={12} start="xs">
                  <Language>
                    <Selector name="language">
                      <option value="en">English</option>
                      <option value="ru">Russian</option>
                    </Selector>
                  </Language>
                </Col>
                <Col xs={6} md={12} lg={12} end="xs">
                  <Currency>
                    <Selector name="currency">
                      <option value="usd">United States Dollar</option>
                      <option value="rub">Russian Rouble</option>
                    </Selector>
                  </Currency>
                </Col>
              </Row>
            </Grid>
          </Col>
          <Col xs={2} md={2} mdOffset={1} lg={2} start="xs">
            <Group>
              <Title>Airbnb</Title>
              <FooterLink href="#">About us</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Press</FooterLink>
              <FooterLink href="#">Policies</FooterLink>
              <FooterLink href="#">Help</FooterLink>
              <FooterLink href="#">Diversity & Belonging</FooterLink>
            </Group>
          </Col>
          <Col xs={2} md={2} mdOffset={1} lg={2} start="xs">
            <Group>
              <Title>Discover</Title>
              <FooterLink href="#">Trust & Safety</FooterLink>
              <FooterLink href="#">Travel Credit</FooterLink>
              <FooterLink href="#">Gift Cards</FooterLink>
              <FooterLink href="#">Airbnb Citizen</FooterLink>
              <FooterLink href="#">Business Travel</FooterLink>
              <FooterLink href="#">Guidebooks</FooterLink>
              <FooterLink href="#">Airbnbmag</FooterLink>
            </Group>
          </Col>
          <Col xs={2} md={2} mdOffset={1} lg={2} start="xs">
            <Group>
              <Title>Hosting</Title>
              <FooterLink href="#">Why Host</FooterLink>
              <FooterLink href="#">Hospitality</FooterLink>
              <FooterLink href="#">Responsible Hosting</FooterLink>
              <FooterLink href="#">Community Center</FooterLink>
            </Group>
          </Col>
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
