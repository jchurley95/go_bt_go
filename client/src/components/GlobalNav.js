import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const GlobalNavStyle = styled.div`
width: 95%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 2.5%;
background-color: white;
box-shadow: 0px 1px 6px black;
margin-bottom: 20px;
a {
    color: gold
    text-decoration: none;
    margin: 0 5px;
    &:visited {
        color: green;
    }
}
`

class GlobalNav extends Component {
    render() {
        return (
            <GlobalNavStyle>
                <Link to={`/`}>
                    <h3>Home</h3>
                </Link>
            </GlobalNavStyle>
        );
    }
}

export default GlobalNav;