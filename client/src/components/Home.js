import React, { Component } from 'react';
import AllHouses from './AllHouses';
import AllEvents from './AllEvents';
import styled from 'styled-components';
import $ from 'jquery'; 

const HomePageStyle = styled.div`
    // display: flex;
    // flex-wrapper: wrap;
    // justify-content: space-around;
`



class Home extends Component {

    
    render() {
        const HomeStyle = {
            borderRadius: '25px'
        }
        
        return (
            <div className="HomeContainer" style={HomeStyle}>
                <AllHouses />
                <AllEvents />
            </div>
        );
    }
}

export default Home;