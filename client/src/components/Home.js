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
        return (
            <div>
                
                <HomePageStyle>
                    <div>
                        <AllHouses />
                    </div>
                    <div>
                        <AllEvents />
                    </div>
                </HomePageStyle>
            </div>
        );
    }
}

export default Home;