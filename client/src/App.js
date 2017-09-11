import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AllHouses from "./components/AllHouses";
import HouseItem from "./components/HouseItem"
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' component={AllHouses} />
            <Route exact path='/houses/:id' component={HouseItem} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
