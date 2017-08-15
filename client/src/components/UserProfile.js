import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

import User from './User';
import DeleteUser from './DeleteUser';

class UserProfile extends Component {
    render() {
        if (!this.props.loggedIn){
            return <Redirect to={`/`} />
        } else {
        return (
            <div>
                <User userId={this.props.userId} />
                <br />
              
                <br />
                <DeleteUser deleteUser={this.props.deleteUser}/>
            </div>
        );}
    }
}

export default UserProfile;

