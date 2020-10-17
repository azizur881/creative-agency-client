import React from 'react';
import UserFeature from '../UserFeature/UserFeature';
import UserForm from '../UserForm/UserForm';

const User = () => {
    return (
        <div style={{display="flex"}}>
            <UserFeature></UserFeature>
            <UserForm to="/userform"></UserForm>
        </div>
    );
};
export default User;