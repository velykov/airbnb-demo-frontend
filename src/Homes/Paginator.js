import React from "react";
import styled from "styled-components";
import arrow from "./arrow.svg";

const Group = styled.div`
  margin-top: 18px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
`;

const Link = styled.a`
  font: normal 16px/19px Circular_Air-Book;
  display: flex;
  justify-content: space-around;
  width: 32px;
  height: 32px;
  line-height: 32px;
  text-decoration: none;
  margin: 0 8px;
  background-color: ${props => (props.active ? "#008489" : "transparent")};
  color: ${props => (props.active ? "#fff" : "#0F7276")};
  border-radius: ${props => (props.active ? 50 : 0)}%;
`;

const Total = styled.p`
  font: normal 16px/19px Circular_Air-Book;
  margin: 0 0 24px;
  color: #383838;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function() {
  return (
    <Nav>
      <Group>
        <Link href="#" active={true}>
          1
        </Link>
        <Link href="#">2</Link>
        <Link href="#">3</Link>
        <Link href="#">...</Link>
        <Link href="#">17</Link>
        <Link href="#">
          <img src={arrow} alt="Next page" />
        </Link>
      </Group>
      <Total>1 – 18 of 300+ Rentals</Total>
    </Nav>
  );
}
