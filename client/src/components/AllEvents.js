import React, { Component } from 'react';
import axios from 'axios';
import EventCard from './EventCard';
import styled from 'styled-components';
import Coverflow from 'react-coverflow';
import {StyleRoot} from 'radium';

const EventListContainer = styled.div`
`

class AllEvents extends Component {
    constructor() {
        super();
        this.state = {
            events: []
        }
    }

    componentWillMount() {
        this._fetchEvents();
    }

    _fetchEvents = async () => {
        try {
            const res = await axios.get('https://sheetlabs.com/BTHO/bt_point_events');
            console.log(res.data);

            await this.setState({events: res.data});
            return res.data;
        }
        catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <div>

                <h2>Events</h2>
                <StyleRoot>
                <Coverflow
                    displayQuantityOfSide={2}
                    navigation={true}
                    enableHeading={true}
                    active={0}
                    media={{
                    '@media (max-width: 900px)': {
                        width: '600px',
                        height: '300px'
                    },
                    '@media (min-width: 900px)': {
                        width: '960px',
                        height: '600px'
                    }
                    }}
                >

                        {this.state.events.map((event) => {
                            
                            return <EventCard event={event} key={event.id} data-action="http://andyyou.github.io/react-coverflow/"/>
                        
                        })}
                    </Coverflow>
                </StyleRoot>
                
                
            </div>
        );
    }
}

export default AllEvents;