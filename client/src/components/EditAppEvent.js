import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom'

class EditAppEvent extends Component {
    constructor() {
        super();
        this.state = {
            event: {
                event_name: '',
                event_date: '2017-09-08T00:00:00+00:00',
                event_time: '',
                event_type: ''
            },
            redirect: false

        }
    }
    

    componentWillMount() {
        const eventId = this.props.match.params.id
        this._fetchEvent(eventId)       
    }

    _fetchEvent = async (eventId) => {
        try {
            const res = await axios.get(`/api/events/${eventId}`)
            await this.setState({
                event: {
                    event_name: res.data.event_name,
                    event_date: res.data.event_date,
                    event_time: res.data.event_time,
                    event_type: res.data.event_type
                }
            })
        }
        catch (err) {
            console.log(err)
        }
    }   

    _editEvent = async (e) => {
        e.preventDefault();
        const event = this.state.event
        const eventId = this.props.match.params.id
        try {
            const res = await axios.put(`/api/events/${eventId}`, event)
            this.setState({redirect: true})
            return res.data
        } 
        catch (err) {
            console.log(err)
        }
    }

    _handleChange = (e) => {
        const newState = {...this.state.event}
        newState[e.target.name] = e.target.value
        this.setState({
            event: newState
        })
    }

    render() {
        return (
            <div>
                {this.state.redirect? 
                <Redirect to={`/events/${this.props.match.params.id}`}/>
                :
                <div>
                <h1>Edit Event</h1>
                <form>
                    <div>
                        <label htmlFor="event_name">Event Name: </label>
                        <input onChange={this._handleChange} type="text" name="event_name" value={this.state.event.event_name} required/>
                    </div>
                    <div>
                        <label htmlFor="event_date">Date: </label>
                        <input onChange={this._handleChange} type="text" name="event_date" value={this.state.event.event_date} required/>
                    </div>
                    <div>
                        <label htmlFor="event_time">Time: </label>
                        <input onChange={this._handleChange} type="text" name="event_time" value={this.state.event.event_time} />
                    </div>
                    <div>
                        <label htmlFor="event_type">Type of Event: </label>
                        <input onChange={this._handleChange} type="text" name="event_type" value={this.state.event.event_type} required/>
                    </div>
                    <button onClick={this._editEvent}>Submit</button>
                </form>
                </div>
                }
              
            </div>
        );
    }
}

export default EditAppEvent;