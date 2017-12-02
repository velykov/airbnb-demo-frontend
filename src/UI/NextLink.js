import React from "react";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";
import nextPage from "./nextPage.svg";

const Link = styled(RouterLink)`
  display: none;
  @media (min-width: 992px) {
    display: block;
    position: absolute;
    top: ${props => (props.top ? props.top : 0)}%;
    right: -2px;
    width: 40px;
    height: 40px;
  }
`;

export default function(props) {
  return (
    <Link to={props.to} top={props.top}>
      <img src={nextPage} alt="Next page" />
    </Link>
  );
}
