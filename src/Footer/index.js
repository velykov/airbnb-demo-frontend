import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";

import { Img, Hr } from "../commons/styled";

import arrow from "./arrow.svg";
import logo from "./logo.svg";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import twitter from "./twitter.svg";

const Title = styled.b`
  font: bold 15px/18px Circular_Air-Bold;
  margin-bottom: 8px;
`;

const DropDown = styled.div`
  margin: 0 -4px 16px -8px;
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

const Link = styled.a`
  text-align: left;
  color: ${props => (props.color ? props.color : "inherit")};
  text-decoration: none;

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
                  <DropDown>
                    <Selector name="language">
                      <option value="en">English</option>
                      <option value="ru">Russian</option>
                    </Selector>
                  </DropDown>
                </Col>
                <Col xs={6} md={12} lg={12} end="xs">
                  <DropDown>
                    <Selector name="currency">
                      <option value="usd">United States Dollar</option>
                      <option value="rub">Russian Rouble</option>
                    </Selector>
                  </DropDown>
                </Col>
              </Row>
            </Grid>
          </Col>
          <Col xs={2} mdOffset={1} start="xs">
            <Group>
              <Title>Airbnb</Title>
              <Link href="#">About us</Link>
              <Link href="#">Careers</Link>
              <Link href="#">Press</Link>
              <Link href="#">Policies</Link>
              <Link href="#">Help</Link>
              <Link href="#">Diversity & Belonging</Link>
            </Group>
          </Col>
          <Col xs={2} mdOffset={1} start="xs">
            <Group>
              <Title>Discover</Title>
              <Link href="#">Trust & Safety</Link>
              <Link href="#">Travel Credit</Link>
              <Link href="#">Gift Cards</Link>
              <Link href="#">Airbnb Citizen</Link>
              <Link href="#">Business Travel</Link>
              <Link href="#">Guidebooks</Link>
              <Link href="#">Airbnbmag</Link>
            </Group>
          </Col>
          <Col xs={2} mdOffset={1} start="xs">
            <Group>
              <Title>Hosting</Title>
              <Link href="#">Why Host</Link>
              <Link href="#">Hospitality</Link>
              <Link href="#">Responsible Hosting</Link>
              <Link href="#">Community Center</Link>
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
