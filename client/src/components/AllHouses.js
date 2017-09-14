import React, { Component } from 'react';
import axios from 'axios';
import HouseCard from './HouseCard';
import styled from 'styled-components';
import Coverflow from 'react-coverflow';
import {StyleRoot} from 'radium';
import Radium from 'radium';
import { Link } from 'react-router-dom';

class AllHouses extends Component {
    constructor() {
        super();
        this.state = {
            houses: [],
            currdeg: 0
        }
    }

    componentWillMount() {
        this._fetchHouses();
    }

    _rotateLeft = () => {
        const newdeg = this.state.currdeg - 45;
        console.log(newdeg);
        this.setState({currdeg: newdeg});
    }

    _rotateRight = () => {
        const newdeg = this.state.currdeg + 45;
        console.log(newdeg);
        this.setState({currdeg: newdeg});
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
    
    // " +this.state.currdeg+ "
    render() {
        let carouselStyle = {
            WebkitTransform: "rotateY("+this.state.currdeg+"deg)",
            mozTransform: "rotateY("+this.state.currdeg+"deg)",
            oTransform: "rotateY("+this.state.currdeg+"deg)",
            transform: "rotateY("+this.state.currdeg+"deg)"
        }
        let rotateDegrees = -45;
        // loop through houses
        // const degrees = 0
        // each house
            // <div className="item house"+i+"" >{house.name}</div>
        return (
            <div className="AllHousesContainer">
                <div className="container">
                    <div className="my-carousel" style={carouselStyle}>

                            {this.state.houses.map((house) => {
                                rotateDegrees = rotateDegrees + 45;
                                let currentStyle = {transform: "rotateY("+rotateDegrees+"deg) translateZ(300px)"}
                                return <div className="item" style={currentStyle}> 
                                            <h2><Link to={`/houses/${house.id}`}>
                                                {house.name}
                                            </Link></h2>
                                            <h4>Points: {house.points}</h4>
                                        </div>
                                
                            })}
                    </div>
                    

                </div>
            <button className="next" onClick={this._rotateLeft}>Next</button>
            <button className="prev" onClick={this._rotateRight}>Prev</button>
                {/* <StyleRoot>
                    <Coverflow
                        displayQuantityOfSide={1}
                        navigation={true}
                        enableHeading={false}
                        active={0}
                        media={{
                        '@media (max-width: 900px)': {
                            width: '100%',
                            height: '300px',

                        },
                        '@media (min-width: 900px)': {
                            width: '80%',
                            height: '600px',
                        }
                        }}
                        
                    >

                        {this.state.houses.map((house) => {
                            
                            return <HouseCard house={house} key={house.id}/>
                        
                        })}
                    </Coverflow>
                </StyleRoot> */}

            </div>
        );
    }
}

export default AllHouses;