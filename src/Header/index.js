import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import logo from "./logo.svg";
import search from "./search.svg";
import arrow from "../UI/arrow.svg";
import { Img, Link } from "../UI";

const Header = styled.header`
  padding: 16px 0;
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

const Location = styled.div`
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
`;

const LocationInput = styled.input`
  padding: 0.5em;
  border-radius: 4px;
  font-size: 16px;
  line-height: 24px;
  border: 0px;
  width: 100%;
  color: #383838;
  opacity: ${props => (props.value ? 1 : 0.64)};
  font-family: Circular_Air-Book;
  padding-left: 54px;
  background: url('${search}') 16px center no-repeat;
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
      <Grid>
        <Row start="xs" middle="xs">
          <Col xs={2} md={1} lg={1}>
            <Arrow>
              <Logo src={logo} alt="logo" />
            </Arrow>
          </Col>
          <Col xs={10} md={7} lg={5}>
            <Location>
              <LocationInput
                type="text"
                placeholder="Try “Miami”"
                value={props.value ? props.value : undefined}
              />
            </Location>
          </Col>
          <Col lgOffset={2} lg={4}>
            <Navigation>
              <Link href="#">Become a host</Link>
              <Link href="#">Help</Link>
              <Link href="#">Sign up</Link>
              <Link href="#">Log in</Link>
            </Navigation>
          </Col>
        </Row>
      </Grid>
    </Header>
  );
}
