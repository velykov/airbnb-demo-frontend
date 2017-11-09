import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import search from "./search.svg";

const Container = styled.div`
  width: 976px;
  margin: 0 auto;
  margin-bottom: 16px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin-top: 16px;
`;

const Column = styled.div`
  box-sizing: border-box;
  flex-basis: ${props => (props.size ? props.size / 12 * 100 : 8.33333333)}%;
  padding: 0px 8px;
`;

const Img = styled.img`
  height: ${props => (props.height ? props.height : "auto")};
  width: ${props => (props.width ? props.width : "auto")};
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
  color: #383838;
  opacity: 0.64;
  font-family: inherit;
  padding-left: 54px;
  outline: none;
  background: url('${search}') 16px center no-repeat;
`;

const Offset = styled(Column)``;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #383838;
`;

const Link = styled.a`
  box-sizing: border-box;
  color: ${props => (props.color ? props.color : "inherit")};
  text-align: center;
  text-decoration: None;
`;

const Hr = styled.hr`
  border: 0;
  height: 1px;
  background: #484848;
  mix-blend-mode: normal;
  opacity: 0.25;
`;

export default function() {
  return (
    <Container>
      <Row>
        <Column size="1">
          <Logo src={logo} alt="logo" />
        </Column>
        <Column size="5">
          <Location>
            <LocationInput type="text" placeholder="Try “Miami”" />
          </Location>
        </Column>
        <Offset size="2" />
        <Column size="4">
          <Navigation>
            <Link href="#">Become a host</Link>
            <Link href="#">Help</Link>
            <Link href="#">Sign up</Link>
            <Link href="#">Log in</Link>
          </Navigation>
        </Column>
      </Row>
      <Row>
        <Column size="12">
          <Hr />
        </Column>
      </Row>
    </Container>
  );
}
