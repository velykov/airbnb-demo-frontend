import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";
import Main from "./Main";
import Homes from "./Homes";
import "normalize.css";

const BodyStyles = styled.div`
  font-family: Circular_Air-Light, Helvetica Neue, Helvetica, Arial, sans-serif;
  color: #383838;
`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BodyStyles>
          <Route path="/" exact component={Main} />
          <Route path="/homes" component={Homes} />
        </BodyStyles>
      </BrowserRouter>
    );
  }
}

export default App;
