import React, { Component } from 'react';
import axios from 'axios';
import FamilyCard from './FamilyCard';
import styled from 'styled-components';
import Coverflow from 'react-coverflow';
import {StyleRoot} from 'radium';

const FamilyListContainer = styled.div`
    display: flex;
    flex-wrapper: wrap;
    justify-content: center;
`

class AllFamilies extends Component {
    constructor() {
        super();
        this.state = {
            families: []
        }
    }

    componentWillMount() {
        this._fetchFamilies();
    }

    _fetchFamilies = async () => {
        try {
            const res = await axios.get('/api/families');
            console.log(res);
            
            await this.setState({families: res.data});
            return res.data;
        }
        catch (err) {
            console.log(err)
        }
    }
    


    render() {
        return (
            <div>
                <h1>Families</h1>
                
                <FamilyListContainer>
                    {this.state.families.map((family) => {
                        
                        return <FamilyCard family={family} key={family.id}/>
                    
                    })}
                </FamilyListContainer>
                
            </div>
        );
    }
}

export default AllFamilies;