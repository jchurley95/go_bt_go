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

    // componentWillMount() {
    //     const houseId = this.props.match.params.id;
    //     this._fetchHouse(houseId);
    //     this._fetchFamilies(houseId);
    // }

    // _fetchHouse = async (houseId) => {
    //     try {
    //         const res = await axios.get(`/api/houses/${houseId}`)
    //         await this.setState({
    //             house: res.data
    //         })
    //         return res.data
    //         console.log(res.data)
    //     }
    //     catch(err) {
    //         console.log(err)
    //     }
    // }

    // _fetchFamilies = async (houseId) => {
    //     try {
    //         const res = await axios.get(`/api/houses/${houseId}`)
    //         await this.setState({families: res.data})
    //         return res.data.families
    //         console.log(res.data.families)
    //     }
    //     catch(err) {
    //         console.log(err)
    //     }
    // }

    // _deleteFamily = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const res = await axios.delete(`/api/houses/${this.props.match.params.id}`)
    //         this.setState({redirect: true})
    //         return res.data
            

    //     } catch(err) {
    //         console.log(err)
    //     }
    // }
    

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