import React, { Component } from 'react';
import axios from 'axios';
import HouseCard from './HouseCard';
import styled from 'styled-components';

const HouseListContainer = styled.div`
`

class AllHouses extends Component {
    constructor() {
        super();
        this.state = {
            houses: []
        }
    }

    componentWillMount() {
        this._fetchHouses();
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
        return (
            <div>
                <h1>Houses</h1>
                
                <HouseListContainer>
                    <ol>
                        {this.state.houses.map((house) => {
                            
                            return <HouseCard house={house} key={house.id}/>
                        
                        })}
                    </ol> 
                </HouseListContainer>
                
            </div>
        );
    }
}

export default AllHouses;