import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Reservations from "./Reservations";
import Destinations from "./Destinations";

const PageWrapper = styled.section`
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  padding-bottom: 24px;
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
          {/* TODO */}
        </main>
        <Footer />
      </PageWrapper>
    );
  }
}

export default App;
