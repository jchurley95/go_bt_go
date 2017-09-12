import React, { Component } from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom'
import styled from 'styled-components';

const HouseItemHeader = styled.div`
    border: 2px solid black;
    border-radius: 10px;
`

class HouseItem extends Component {
    constructor() {
        super();
        this.state = {
            house: {
                name: "",
                description: "",
                house_mascot: "",
                house_motto: "",
                house_motto_latin: "",
                picture_url: "",
                house_director_name: "",
                points: 0,
                house_color: ""
            },
            families: [],
            redirect: false
        }
    }

    componentWillMount() {
        const houseId = this.props.match.params.id;
        this._fetchHouse(houseId);
        this._fetchFamilies(houseId);
    }

    _fetchHouse = async (houseId) => {
        try {
            const res = await axios.get(`/api/houses/${houseId}`)
            await this.setState({
                house: {
                    name: res.data.name,
                    description: res.data.description,
                    house_mascot: res.data.house_mascot,
                    house_motto: res.data.house_motto,
                    house_motto_latin: res.data.house_motto_latin,
                    picture_url: res.data.picture_url,
                    house_director_name: res.data.house_director_name,
                    points: res.data.points,
                    house_color: res.data.house_color
                }
            })
            return res.data
            console.log(res.data)
        }
        catch(err) {
            console.log(err)
        }
    }

    _fetchFamilies = async (houseId) => {
        try {
            const res = await axios.get(`/api/houses/${houseId}/families`)
            await this.setState({families: res.data})
            return res.data
            console.log(res.data)
        }
        catch(err) {
            console.log(err)
        }
    }

    _deleteHouse = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.delete(`/api/houses/${this.props.match.params.id}`)
            this.setState({redirect: true})
            return res.data
            

        } catch(err) {
            console.log(err)
        }
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
                        <h1>{this.state.house.name}</h1>
                        <h4>"{this.state.house.house_motto_latin}"</h4>
                        <h4>"{this.state.house.house_motto}"</h4>
                    </div>

                    <div>
                        <img src={this.state.house.picture_url} />
                        <p>{this.state.house.description}</p>
                        <div><strong>House Director:</strong> {this.state.house.house_director_name}</div>
                        <div><strong>House Mascot:</strong> {this.state.house.house_mascot}</div>
                    </div>

                    <hr />
                    
                    <div>
                        <Link to={`/houses/${this.props.match.params.id}/edit`}><button>Edit House</button></Link>
                        <br/>
                        <button onClick={this._deleteHouse}>Delete This House</button>
                    </div>
                </div>
                }
            </div>
        )
    }
}

export default HouseItem;