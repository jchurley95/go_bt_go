import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HouseItem from "./components/HouseItem";
import FamilyItem from "./components/FamilyItem";
import GlobalNav from "./components/GlobalNav";
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import AppEvents from "./components/AppEvents";
import AppEventItem from "./components/AppEventItem";
import NewAppEvent from './components/NewAppEvent';
import EditAppEvent from './components/EditAppEvent';
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
            <Route exact path='/events' component={AppEvents} />
            <Route exact path='/new' component={NewAppEvent} />
            <Route exact path='/events/:id' component={AppEventItem} />
            <Route exact path='/events/:id/edit' component={EditAppEvent} />
            {/* <Route exact path="/user/:id" component={UserProfile}/> */}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
