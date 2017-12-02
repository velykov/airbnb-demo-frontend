import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./Main";
import Homes from "./Homes";
import "normalize.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Main} />
          <Route path="/homes" component={Homes} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
