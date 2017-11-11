import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";

import { Img, Hr, Link } from "../commons/styled";

import arrow from "./arrow.svg";
import logo from "./logo.svg";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import twitter from "./twitter.svg";

const List = styled.ul`
  font-size: 15px;
  padding: 0;
  margin: 0;
  list-style-type: none;
  list-style-position: inside;
`;

const FooterTitle = styled.b`
  font: bold 15px/18px Circular_Air-Bold;
  margin-bottom: 8px;
`;

const ListItem = styled.li`
  padding-top: 8px;
  color: #636363;
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
  @screen(min-width:320px) {
  font: lighter 15px/18px Circular_Air-Light;
  }
  @screen(min-width:768px) {
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
  justify-content: space-around;
  align-items: center;
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
            <Dropdown>
              <Selector name="language">
                <option value="en">English</option>
                <option value="ru">Russian</option>
              </Selector>
            </Dropdown>
            <Dropdown>
              <Selector name="currency">
                <option value="usd">United States Dollar</option>
                <option value="rub">Russian Rouble</option>
              </Selector>
            </Dropdown>
          </Col>
          <FooterLinks md={2} mdOffset={1} xs={2}>
            <FooterTitle>Airbnb</FooterTitle>
            <List>
              <ListItem>
                <Link href="#">About us</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Careers</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Press</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Policies</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Help</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Diversity & Belonging</Link>
              </ListItem>
            </List>
          </FooterLinks>
          <FooterLinks md={2} mdOffset={1} xs={2}>
            <FooterTitle>Discover</FooterTitle>
            <List>
              <ListItem>
                <Link href="#">Trust & Safety</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Travel Credit</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Gift Cards</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Airbnb Citizen</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Business Travel</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Guidebooks</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Airbnbmag</Link>
              </ListItem>
            </List>
          </FooterLinks>
          <FooterLinks md={2} mdOffset={1} xs={2}>
            <FooterTitle>Hosting</FooterTitle>
            <List>
              <ListItem>
                <Link href="#">Why Host</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Hospitality</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Responsible Hosting</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Community Center</Link>
              </ListItem>
            </List>
          </FooterLinks>
        </Row>
        <Row>
          <Col size={12}>
            <Hr marginTop={48} marginBottom={34} />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Credits>
              <Img src={logo} alt="logo" />
              <Copyright>© Airbnb Inc.</Copyright>
            </Credits>
          </Col>
          <Col xs={12}>
            <FooterNav>
              <Link href="#">Terms</Link>
              <Link href="#">Privacy</Link>
              <Link href="#">Site map</Link>
              <Link href="#">
                <Img src={facebook} alt="facebook" />
              </Link>
              <Link href="#">
                <Img src={twitter} alt="twitter" />
              </Link>
              <Link href="#">
                <Img src={instagram} alt="instagram" />
              </Link>
            </FooterNav>
          </Col>
        </Row>
      </Grid>
    </footer>
  );
}
