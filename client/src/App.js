import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HouseItem from "./components/HouseItem";
import FamilyItem from "./components/FamilyItem";
import GlobalNav from "./components/GlobalNav";
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { setAxiosDefaults } from './util';

import "./App.css";

class App extends Component {
  componentWillMount(){
    setAxiosDefaults();
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <GlobalNav />
            <Route exact path='/' component={Home} />
            <Route exact path='/houses/:id' component={HouseItem} />
            <Route path='/houses/:house_id/families/:id' component={FamilyItem} />
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/signin" component={SignIn}/>
            {/* <Route path="/House/new" component={NewHouse}/> */}
            {/* <Route exact path="/user/:id" component={UserProfile}/> */}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
