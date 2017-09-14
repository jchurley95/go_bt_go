import React, { Component } from 'react';
import axios from 'axios';
import EventCard from './EventCard';

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
            const res = await axios.get('https://sheetlabs.com/BTHO/bt_point_events', {transformRequest: (data, headers) => {
                console.log(headers)
                delete headers.expiry;
                delete headers.uid;
                delete headers['access-token'];
                delete headers.client;
                delete headers['token-type']
                
                return data
                
            }});
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
            <div className="AllEventsContainer">

                        {this.state.events.map((event) => {
                            
                            return <EventCard event={event} key={event.index}/>
                        
                        })}
                
            </div>
        );
    }
}

export default AllEvents;