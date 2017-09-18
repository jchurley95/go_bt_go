import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import moment from 'moment';

const EventCardStyles = styled.div`
  width: 30%;
  padding: 10px;
  margin: 20px 0; 
  box-shadow: 1px 1px 5px black;
  h3{
    padding: 5px 0;
  }
`;

const AppEventCard = (props) => {
  
  const event = props.event;
  const eventDate = moment(event.eventdate).add(1, 'day').format('LL')
  return (
      <div className="AppEventCard">
        <EventCardStyles>
        <Link to={`/events/${event.id}`}>
            <h3>{event.event_name}</h3>
        </Link>
            <h3>{eventDate}</h3>
            <h3>{event.event_time}</h3>
            <h3>{event.event_type}</h3> 
        </EventCardStyles>
            
    </div>
  );
};

export default AppEventCard;