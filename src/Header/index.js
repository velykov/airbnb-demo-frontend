import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import search from "./search.svg";

import { Container, Column, Img, Hr, Link } from "../commons/styled";

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin-top: 16px;
`;

const Logo = styled(Img)`
  width: 30px;
  height: 32px;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
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
  opacity: 0.64;
  font-family: Circular_Air-Book;
  padding-left: 54px;
  outline: none;
  background: url('${search}') 16px center no-repeat;
`;

const Offset = styled(Column)``;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default function() {
  return (
    <Container>
      <Row>
        <Column size={1}>
          <Logo src={logo} alt="logo" />
        </Column>
        <Column size={5}>
          <Location>
            <LocationInput type="text" placeholder="Try “Miami”" />
          </Location>
        </Column>
        <Offset size={2} />
        <Column size={4}>
          <Navigation>
            <Link href="#">Become a host</Link>
            <Link href="#">Help</Link>
            <Link href="#">Sign up</Link>
            <Link href="#">Log in</Link>
          </Navigation>
        </Column>
      </Row>
      <Row>
        <Column size={12}>
          <Hr />
        </Column>
      </Row>
    </Container>
  );
}
