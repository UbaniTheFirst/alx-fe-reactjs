import React, { useContext } from 'react';
import UserContext from '../UserContext';

function UserProfile() {
    const user = useContext(UserContext);

    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
        </div>
    );
}

export default UserProfile;