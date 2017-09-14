import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HouseCardStyles = styled.div`
  font-size: 20px;
`;

const HouseCard = (props) => {
  const house = props.house;
  return (
    <HouseCardStyles>
        
            <Link to={`/houses/${house.id}`}>
                {house.name}
            </Link>
                Points: {house.points}
    </HouseCardStyles>
  );
};

export default HouseCard;