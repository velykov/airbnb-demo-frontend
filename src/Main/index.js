import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Reservations from "./Reservations";
import Destinations from "./Destinations";
import styled from "styled-components";

const Main = styled.main`
  margin-top: 120px;
  @media (min-width: 768px) {
    margin-top: 128px;
  }
  @media (min-width: 992px) {
    width: 996px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default () => {
  return (
    <div>
      <Header />
      <Main>
        <Explore />
        <Experiences />
        <Homes />
        <Reservations />
        <Destinations />
      </Main>
      <Footer />
    </div>
  );
};
