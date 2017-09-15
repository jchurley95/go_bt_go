import React, { Component } from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom'
import styled from 'styled-components';
import StudentCard from './StudentCard'

const FamilyItemHeader = styled.div`
    border: 2px solid black;
    border-radius: 10px;
`

const FamilyListContainer = styled.div`
// display: flex;
// flex-wrapper: wrap;
// justify-content: center;
`

class FamilyItem extends Component {
    constructor() {
        super();
        this.state = {
            family: {},
            users: [],
            redirect: false
        }
    }

    componentWillMount(){
        this._fetchHouseAndFamilyandUsers();
    }

    _fetchHouseAndFamilyandUsers = async () => {
        const houseId = this.props.match.params.house_id;
        const id = this.props.match.params.id;
        console.log("house id is: " + houseId)
        console.log("family id is: " + id)
        const res = await axios.get(`/api/houses/${houseId}/families/${id}`)
        this.setState({
            family: res.data.family,
            users: res.data.users
        })
    }
    

    render() {
        const headerStyle = {
            // background: {this.state.house.house_color},
            border: "2px solid black",
            borderRadius: "10px"
        };
        return (
            <div>
                {this.state.redirect 
                ? 
                    <Redirect to={'/'} />
                :
                <div>

                    <div style={headerStyle}>
                        <h1>{this.state.family.family_mentor}</h1>
                    </div>

                    {this.state.users.map((user) => {
                            
                        return <StudentCard family={this.state.family} user={user} key={user.id}/>
                        
                    })}

                    
                </div>
                }
            </div>
        )
    }
}

export default FamilyItem;