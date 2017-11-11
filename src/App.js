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
  max-width: 966px;
  margin: 0 auto;
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
