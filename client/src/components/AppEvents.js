import React, { Component } from 'react';
import axios from 'axios';
import AppEventCard from './EventCard';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import moment from 'moment';


const EventContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

class AppEvents extends Component {

    constructor(){
        super();
        this.state = {
            events:[]
        }
    }

    componentWillMount(){
        this._fetchEvents();
    }

    _fetchEvents = async () => {
        try {
            const res = await axios.get('/api/events');
            await this.setState({events: res.data});
            return res.data;
            
        }
        catch (err) {
            console.log(err)
        }
        
    }

    render() {
        const LinkStyle = {
            color: 'green',
            margin: '20px',
        }
        
        return (
            <div>
                <h1>Events</h1>
                <h2>
                    <Link to={`/new`} style={LinkStyle}>
                        Create An Event
                    </Link>
                </h2>
                <EventContainer>
                    {this.state.events.map((event) => {
                    return <div>
                                <Link to={`/events/${event.id}`} style={LinkStyle}>
                                    <h3>{event.event_name}</h3>
                                </Link>
                                <h3>{moment(event.eventdate).add(1, 'day').format('LL')}</h3>
                                <h3>{event.event_time}</h3>
                                <h3>{event.event_type}</h3> 
                            </div>
                    })}
                </EventContainer>
            </div>
        );
    }
}

export default AppEvents;