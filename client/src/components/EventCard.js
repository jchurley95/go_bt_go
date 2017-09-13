import React from 'react';
import styled from 'styled-components'

const EventCardStyle = styled.div`
    width: 30%;
    padding: 10px;
    margin: 20px; 
    box-shadow: 1px 1px 5px black;
    h2 {
        color: #A38C19;
    }
    h3{
        padding: 5px 0;
    }
`


const EventCard = (props) => {
    const event = props.event
    return (
        <EventCardStyle>
            <h2>{event.eventname}</h2>
            <h3>{event.eventdate}</h3>
            <h3>{event.eventtime}</h3>
            <h3>{event.eventtype}</h3>
        </EventCardStyle>
    );
};

export default EventCard;