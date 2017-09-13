import React, { Component } from 'react';
import axios from 'axios';
import HouseCard from './HouseCard';
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group'

const HouseListContainer = styled.div`
`

class AllHouses extends Component {
    constructor() {
        super();
        this.state = {
            houses: [],
            houseIndex: 0,
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
            <div>
                <h1>Houses</h1>

                <div>
                <div className="container">
                    <div classname="carousel">
                    <ol>
                        
                        {this.state.houses.map((house, index) => {
                            return (
                                <li>
                                    <div className="item">
                                        {house.name}
                                    </div>
                                </li>
                            )
                        })}

                    </ol>

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                        <div className="item a">Dante</div>
                        <div className="item b">Aquinas</div>
                        <div className="item c">Goretti</div>
                        <div className="item d">Xavier</div>
                        <div className="item e">Seton</div>
                        <div className="item f">Vianney</div>
                        <div className="item g">LaSalle</div>
                        <div className="item h">Kolbe</div>
                    </div>
                </div>
                <div className="next">Next</div>
                <div className="prev">Prev</div>
            </div>
                        
                {/* <HouseListContainer>
                    <ol>
                        {this.state.houses.map((house) => {
                            
                            return <HouseCard house={house} key={house.id}/>
                        
                        })}
                    </ol> 
                </HouseListContainer> */}

                
            </div>
        );
    }
}

export default AllHouses;