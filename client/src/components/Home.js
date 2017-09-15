import React, { Component } from 'react';
import AllHouses from './AllHouses';
import AllEvents from './AllEvents';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from "axios";


class Home extends Component {
    constructor() {
        super();
        this.state = {
            user: {},
            loggedIn: false
        }
    }

    componentWillMount() {
        this._isLoggedIn();
    }
    componentWillReceiveProps() {
        this._isLoggedIn();
    }

    _isLoggedIn = async () => {
        const response = await axios.get("/auth/validate_token");
        this.setState({
            user: response.data.data,
            loggedIn: response.data.success
        });
    };

    render() {
        const LinkStyle = {
            color: 'black',
            margin: '20px',
        }
        
            return (
                <div className="HomeContainer">
                    {this.state.user.type_of_user == "madre" 
                    ? 
                    <div>
                    <AllHouses />
                    <AllEvents />

                    
                        <h2>
                        <Link to={`/events`} style={LinkStyle}>
                            Manage Events In The App's Database
                        </Link>
                        </h2>
                    </div>
                    :
                    <div>
                    <AllHouses />
                    <AllEvents />

                    </div>
                    }
                </div>
            );
        
    }
}

export default Home;