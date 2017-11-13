import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";
import Main from "./Main";
import Homes from "./Homes";
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
      <BrowserRouter>
        <PageWrapper>
          <Route path="/" exact component={Main} />
          <Route path="/homes" component={Homes} />
        </PageWrapper>
      </BrowserRouter>
    );
  }
}

export default App;
