import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Explore from './Explore';

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
        <Explore/>
        {/* TODO */}
        </main>
        <Footer />
      </PageWrapper>
    );
  }
}

export default App;
