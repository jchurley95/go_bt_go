import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HouseCardStyles = styled.div`
  padding: 10px;
  margin: 20px 0; 
  box-shadow: 1px 1px 5px black;
  h3{
    padding: 5px 0;
  }
`;

const HouseCard = (props) => {
  const house = props.house;
  return (
    <HouseCardStyles>
        
            <Link to={`/houses/${house.id}`}>
                <h3>{house.name}</h3>
            </Link>
        
            <hr />
            <div>
                <h3>Points: {house.points}</h3>
            </div>
        
    </HouseCardStyles>
  );
};

export default HouseCard;