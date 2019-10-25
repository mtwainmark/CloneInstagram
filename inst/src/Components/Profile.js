import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
    return(
        <div className="container profile">
              <User           
            src="https://avatars3.githubusercontent.com/u/42296200?s=460&v=4"
            alt="man"
            name="github mtwainmark"          
            />   
            <Palette/>
        </div>
    )
}

export default Profile;