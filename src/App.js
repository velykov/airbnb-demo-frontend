import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Reservations from "./Reservations";
import Destinations from "./Destinations";
import "normalize.css";

const PageWrapper = styled.section`
  font-family: Circular_Air-Light, Helvetica Neue, Helvetica, Arial, sans-serif;
  padding-bottom: 24px;
  color: #383838;
  margin: 0 auto;

  @media (min-width: 320px) {
    max-width: 320px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 966px) {
    max-width: 966px;
  }
`;

class App extends Component {
  render() {
    return (
      <PageWrapper>
        <Header />
        <main>
          <Explore />
          <Experiences />
          <Homes />
          <Reservations />
          <Destinations />
        </main>
        <Footer />
      </PageWrapper>
    );
  }
}

export default App;
