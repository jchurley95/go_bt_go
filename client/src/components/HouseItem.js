import React, { Component } from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom'
import styled from 'styled-components';
import FamilyCard from './FamilyCard';

const HouseItemHeader = styled.div`
    border: 2px solid black;
    border-radius: 10px;
`

const FamilyListContainer = styled.div`
// display: flex;
// flex-wrapper: wrap;
// justify-content: center;
`

class HouseItem extends Component {
    constructor() {
        super();
        this.state = {
            house: {},
            families: [],
            redirect: false
        }
    }

    componentWillMount(){
        this._fetchHouseAndFamilies();
    }

    _fetchHouseAndFamilies = async () => {
        const id = this.props.match.params.id;
        const res = await axios.get(`/api/houses/${id}`)
        this.setState({
            house: res.data.house,
            families: res.data.families
        })
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
            borderRadius: "10px",
            margin: '10px'
        };
        const imageStyle = {
            borderRadius: "10px"
        }
        const descriptionStyle = {
            textOverflow: 'ellipsis'
        }
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

                    <br />

                    <div>
                        <img src={this.state.house.picture_url} style={imageStyle} />
                    </div>

                    <div>
                        <p style={descriptionStyle}>{this.state.house.description}</p>
                    </div>

                    <div>
                        <div><strong>House Director:</strong> {this.state.house.house_director_name}</div>
                        <div><strong>House Mascot:</strong> {this.state.house.house_mascot}</div>
                    </div>

                    <FamilyListContainer>
                        <h3>Families:</h3>
                        <ol>
                        {this.state.families.map((family) => {
                            
                            return <FamilyCard house={this.state.house} family={family} key={family.id}/>
                        
                        })}
                    </ol> 
                    </FamilyListContainer>

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