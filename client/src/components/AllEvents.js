import React, { Component } from 'react';
import axios from 'axios';
import EventCard from './EventCard';
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group'

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
                <h1>All Events</h1>
                
                <EventListContainer>
                    <ol>
                        {this.state.events.map((event, index) => {
                            
                            return <EventCard event={event} key={index}/>
                        
                        })}
                    </ol> 
                </EventListContainer>
                
            </div>
        );
    }
}

export default AllEvents;