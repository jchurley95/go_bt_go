import React, { Component } from 'react';
import axios from 'axios';
import HouseCard from './HouseCard';
import styled from 'styled-components';
import Coverflow from 'react-coverflow';
import {StyleRoot} from 'radium';
import Radium from 'radium'

class AllHouses extends Component {
    constructor() {
        super();
        this.state = {
            houses: [],
            testData: []
        }
    }

    componentWillMount() {
        this._fetchHouses();
        this._fetchTestData();
    }

    _fetchHouses = async () => {
        try {
            const res = await axios.get('/api/houses');
            console.log(res);
            
            await this.setState({houses: res.data});
            return res.data;
        }
        catch (err) {
            console.log(err)
        }
    }
    
    _fetchTestData = async () => {
        try {
            const res = await axios.get('https://sheetlabs.com/BTHO/bt_house_structure');
            console.log(res);

            await this.setState({testData: res.data});
            return res.data;
        }
        catch (err) {
            console.log(err);
        }
    }


    render() {
        return (
            <div className="AllHousesContainer">
                
                <StyleRoot>
                    <Coverflow
                        displayQuantityOfSide={1}
                        navigation={true}
                        enableHeading={false}
                        active={0}
                        media={{
                        '@media (max-width: 900px)': {
                            width: '80%',
                            height: '300px',
                            boxShadow: '0 0 20px 15px white inset'

                        },
                        '@media (min-width: 900px)': {
                            width: '80%',
                            height: '600px',
                            boxShadow: '0 0 20px 15px white inset'

                        }
                        }}
                        
                    >

                        {this.state.houses.map((house) => {
                            
                            return <HouseCard house={house} key={house.id}/>
                        
                        })}
                    </Coverflow>
                </StyleRoot>

            </div>
        );
    }
}

export default AllHouses;