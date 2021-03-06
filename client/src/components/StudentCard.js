import React from 'react';

const StudentCard = (props) => {
    const user = props.user

    return (
        <div className="studentcard">
            <h3>{user.name}</h3>
            <div>
                <h3>Points: {user.points}</h3>
            </div>
        </div>
    );
};

export default StudentCard;