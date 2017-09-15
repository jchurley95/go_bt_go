import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FamilyCardStyles = styled.div`
  padding: 10px;
  margin: 20px 0; 
  box-shadow: 1px 1px 5px black;
  background: white;
  h3{
    color: green;
    padding: 5px 0;
  }
`;

const FamilyCard = (props) => {
  const house = props.house;
  const family = props.family;

  return (
    <FamilyCardStyles>
        
            <Link to={`/houses/${house.id}/families/${family.id}`}>
                <h3>{family.family_mentor}</h3>
            </Link>
            {/* <button><h3>{family.family_mentor}</h3></button> */}
            <hr />
            <div>
                <h3>Points: {family.points}</h3>
            </div>
        
    </FamilyCardStyles>
  );
};

export default FamilyCard;