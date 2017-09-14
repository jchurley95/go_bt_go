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
        const carouselStyle = {
            WebkitTransform: "rotateY("+this.state.currdeg+"deg)",
            mozTransform: "rotateY("+this.state.currdeg+"deg)",
            oTransform: "rotateY("+this.state.currdeg+"deg)",
            transform: "rotateY("+this.state.currdeg+"deg)"
        }
        const aStyle = {
            transform: "rotateY(0deg) translateZ(300px)",
            background: "green"
        }
        const bStyle = {
            transform: "rotateY(45deg) translateZ(300px)",
            background: "green"
        }
        const cStyle = {
            transform: "rotateY(90deg) translateZ(300px)",
            background: "green"
        }
        const dStyle = {
            transform: "rotateY(135deg) translateZ(300px)",
            background: "green"
        }
        const eStyle = {
            transform: "rotateY(180deg) translateZ(300px)",
            background: "green"
        }
        const fStyle = {
            transform: "rotateY(225deg) translateZ(300px)",
            background: "green"
        }
        const gStyle = {
            transform: "rotateY(270deg) translateZ(300px)",
            background: "green"
        }
        const hStyle = {
            transform: "rotateY(315deg) translateZ(300px)",
            background: "green"
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
                        <div className="item a" style={aStyle}>Dante</div>
                        <div className="item b" style={bStyle}>Aquinas</div>
                        <div className="item c" style={cStyle}>Goretti</div>
                        <div className="item d" style={dStyle}>Xavier</div>
                        <div className="item e" style={eStyle}>Seton</div>
                        <div className="item f" style={fStyle}>Vianney</div>
                        <div className="item g" style={gStyle}>LaSalle</div>
                        <div className="item h" style={hStyle}>Kolbe</div>

                            {/* {this.state.houses.map((house) => {
                                rotateDegrees = rotateDegrees + 45;
                                let currentStyle = ("transform: rotateY("+rotateDegrees+"deg) translateZ(300px)")
                                return <div className="item" style={currentStyle}> 
                                            <HouseCard house={house} key={house.id}/>
                                        </div>
                                
                            })} */}
                    </div>
                    

                </div>
            <button className="next" onClick={this._rotateRight}>Next House</button>
            <button className="prev" onClick={this._rotateLeft}>Prev House</button>
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