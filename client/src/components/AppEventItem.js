import React, { Component } from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom'

class CreatureItem extends Component {
  constructor(){
      super();
      this.state = {
          event: {},
          redirect: false
      };
  }

  componentWillMount(){
      const eventId = this.props.match.params.id;
      this._fetchEvents(eventId);
      
  }

  _fetchEvents = async (eventId) => {
      try {
          const res = await axios.get(`/api/events/${eventId}`)
          await this.setState({event: res.data})
          return res.data
          console.log(res.data)
      }
      catch(err) {
          console.log(err)
      }
  }
  _deleteEvent = async (e) => {
      e.preventDefault();
      try {
          const res = await axios.delete(`/api/events/${this.props.match.params.id}`)
          this.setState({redirect: true})
          return res.data
          

      } catch(err) {
          console.log(err)
      }
  }
  render() {
    return (
      <div>
        {this.state.redirect 
        ? 
            <Redirect to={'/'} />
        :
            <div>
                <h1>{this.state.event.event_name}</h1>
                <p>{this.state.event.event_date}</p>
                <p>{this.state.event.event_time}</p>
                <p>{this.state.event.event_type}</p>
                <Link to={`/events/${this.props.match.params.id}/edit`}><button>Edit Event</button></Link>
                <button onClick={this._deleteEvent}>Delete This Event</button>
            </div>

    }
    </div>
    )
  }
}

export default CreatureItem;