import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const GlobalNavStyle = styled.div`
    background-color: white;
    height: 70px;
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