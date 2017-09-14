import React from 'react';
import styled from 'styled-components'
import moment from 'moment';

const EventCardStyle = styled.div`
    padding: 10px;
    h2 {
        color: #A38C19;
        text-shadow: 3px 3px black;
    }
    h3{
        padding: 5px 0;
    }
`


const EventCard = (props) => {
    const event = props.event
    const eventDate = moment(event.eventdate).add(1, 'day').format('LL')
    return (
        <EventCardStyle>
            <h2>{event.eventname}</h2>
            <h3>{eventDate}</h3>
            <h3>{event.eventtime}</h3>
            <h3>{event.eventtype}</h3>
        </EventCardStyle>
    );
};

export default EventCard;