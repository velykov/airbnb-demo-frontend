import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import logo from "./logo.svg";
import search from "./search.svg";
import arrow from "../UI/arrow.svg";
import { Img, Link as NavLink, ContentWrapper } from "../UI";
import { Link } from "react-router-dom";

const Header = styled.header`
  padding: 16px 0;
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  z-index: 100;
`;

const Logo = styled(Img)`
  width: 30px;
  height: 32px;
`;

const Arrow = styled.a`
    display: flex;
    align-items: center;
    align-self: center;
    flex-direction: row;
    
    &:after {
      content: url("${arrow}") ;
      width: 6px;
      margin-left: 8px;
      transform: rotate(0);
      transform: translate(-50%);
    }

    @media (min-width: 992px) {
      &:after {
        display: none;
      }
    }
`;

const LocationInput = styled.input`
  padding: 11px 0;
  border-radius: 4px;
  font-size: 16px;
  line-height: 24px;
  border: 0px;
  width: 100%;
  color: #383838;
  font-family: Circular_Air-Book;
  padding-left: 54px;
  background: url('${search}') 16px center no-repeat;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  box-sizing: border-box;
  &:focus {
   outline: 0;
  }
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-around;

  @media (max-width: 992px) {
    display: none;
  }
`;

export default function(props) {
  return (
    <Header>
      <ContentWrapper>
        <Grid>
          <Row start="xs" middle="xs">
            <Col xs={2} md={1}>
              <Arrow>
                <Link to="/">
                  <Logo src={logo} alt="logo" />
                </Link>
              </Arrow>
            </Col>
            <Col xs={10} md={7} lg={5}>
              <LocationInput
                type="text"
                placeholder="Try “Miami”"
                value={props.value}
              />
            </Col>
            <Col lgOffset={2} lg={4}>
              <Navigation>
                <NavLink href="#">Become a host</NavLink>
                <NavLink href="#">Help</NavLink>
                <NavLink href="#">Sign up</NavLink>
                <NavLink href="#">Log in</NavLink>
              </Navigation>
            </Col>
          </Row>
        </Grid>
      </ContentWrapper>
    </Header>
  );
}
