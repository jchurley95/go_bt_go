import React, { Component } from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom'
import styled from 'styled-components';
import FamilyCard from './FamilyCard';
import Coverflow from 'react-coverflow';
import {StyleRoot} from 'radium';

const HouseItemHeader = styled.div`
h3, h4 {
    color: green;
}
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
            btHouseStructure: [],
            btHouseInfo: [],
            btHousePointsEvents: [],
            redirect: false
        }
    }

    componentWillMount(){
        this._fetchHouseAndFamilies();
        this._fetchHouseStructureData();
    }

    _fetchHouseAndFamilies = async () => {
        const id = this.props.match.params.id;
        const res = await axios.get(`/api/houses/${id}`)
        console.log(res.data);
        this.setState({
            house: res.data.house,
            families: res.data.families
        })
    }

    _fetchHouseStructureData = async () => {
        try {
            const res = await axios.get('https://sheetlabs.com/BTHO/bt_house_structure');
            console.log(res.data);

            await this.setState({btHouseStructure: res.data});
            return res.data;
        }
        catch (err) {
            console.log(err);
        }
    }

    _sumHousePoints = () => {
        
    }
    

    render() {
        const hstyle = {
            color: 'white',
            fontFamily: 'Fauna One, serif'
        }
        const headerStyle = {
            margin: '10px',
            color: 'white',
            boxShadow: '0 0 10px 10px white inset'
        };
        const imageStyle = {
            borderRadius: "10px",
            boxShadow: '0 0 10px 10px white inset',
            height: '400px'
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

                    <div className="HouseHeader" style={headerStyle}>
                        <h1 style={hstyle}>{this.state.house.name}</h1>
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

                    <br />

                    <StyleRoot>
                        <Coverflow
                            displayQuantityOfSide={2}
                            navigation={true}
                            enableHeading={false}
                            active={0}
                            media={{
                            '@media (max-width: 900px)': {
                                width: '90%',
                                height: '300px'
                            },
                            '@media (min-width: 900px)': {
                                width: '90%',
                                height: '600px'
                            }
                            }}
                        >
                        
                        {this.state.families.map((family) => {
                            
                            return <FamilyCard house={this.state.house} family={family} key={family.id}/>
                        
                        })}

                    </Coverflow>

                </StyleRoot>

                    <hr />

                    <div>
                    </div>
                </div>
                }
            </div>
        )
    }
}

export default HouseItem;