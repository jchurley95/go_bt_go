import React, { Component } from 'react';
import axios from 'axios';
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
    
    render() {
        let carouselStyle = {
            WebkitTransform: "rotateY("+this.state.currdeg+"deg)",
            MozTransform: "rotateY("+this.state.currdeg+"deg)",
            OTransform: "rotateY("+this.state.currdeg+"deg)",
            transform: "rotateY("+this.state.currdeg+"deg)"
        }
        let rotateDegrees = -45;
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

            </div>
        );
    }
}

export default AllHouses;