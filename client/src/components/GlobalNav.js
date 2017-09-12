import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

class GlobalNav extends Component {
    render() {
        return (
            <div>
                <Link to={`/`}>
                    <h3>Home</h3>
                </Link>
            </div>
        );
    }
}

export default GlobalNav;