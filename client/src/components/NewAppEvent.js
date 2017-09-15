import React, { Component } from 'react';
import axios from 'axios'
import {Redirect} from 'react-router-dom'

export default class NewEvent extends Component {
    constructor(){
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

    _handleChange = (e) => {
        const newState = {...this.state.event};
        newState[e.target.name] = e.target.value;
        this.setState({
            event: newState
        });
      }
    
    _addEvent = async (e) => {
        e.preventDefault();
        const payload = this.state.event

        const res = await axios.post('/api/events', payload)
        this.setState({redirect: true});
    }
      
  render() {
    return (
      <div>
          {this.state.redirect? 
            <Redirect to={`/`}/>
            :
            <form onSubmit={this._addEvent}>
                <div>
                    <label htmlFor="event_name">Event Name: </label>
                    <input onChange={this._handleChange} type="text" name="event_name" value={this.state.event.event_name} />
                </div>
                <div>
                    <label htmlFor="event_date">Date: </label>
                    <input onChange={this._handleChange} type="text" name="event_date" value={this.state.event.event_date} />
                </div>
                <div>
                    <label htmlFor="event_time">Time: </label>
                    <input onChange={this._handleChange} type="text" name="event_time" value={this.state.event.event_time} />
                </div>
                <div>
                    <label htmlFor="event_type">Type of Event: </label>
                    <input onChange={this._handleChange} type="text" name="event_type" value={this.state.event.event_type} />
                </div>
                
                <button>Add New Event</button>
            </form>
          }

        
    </div>
    )
  }
}