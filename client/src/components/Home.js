import React, { Component } from 'react';
import AllHouses from './AllHouses';
import AllEvents from './AllEvents';
import styled from 'styled-components';


class Home extends Component {

    
    render() {
        const HomeStyle = {
        }
        
        return (
            <div className="HomeContainer">
                <AllHouses />
                <AllEvents />
            </div>
        );
    }
}

export default Home;