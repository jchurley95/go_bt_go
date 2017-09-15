import React, { Component } from 'react';
import AllHouses from './AllHouses';
import AllEvents from './AllEvents';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


class Home extends Component {

    
    render() {
        const LinkStyle = {
            color: 'black',
            margin: '20px',

        }
        
        return (
            <div className="HomeContainer">
                <AllHouses />
                <AllEvents />

                    <h2>
                    <Link to={`/events`} style={LinkStyle}>
                        Manage Events In The App's Database
                    </Link>
                    </h2>

            </div>
        );
    }
}

export default Home;