import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AllHouses from "./components/AllHouses";
import HouseItem from "./components/HouseItem";
import GlobalNav from "./components/GlobalNav";
import Home from './components/Home';

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <GlobalNav />
            <Route exact path='/' component={Home} />
            <Route exact path='/houses/:id' component={HouseItem} />
            {/* <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/signin" component={SignIn}/> */}
            {/* <Route path="/House/new" component={NewHouse}/> */}
            {/* <Route exact path="/user/:id" component={UserProfile}/> */}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
