// import React, { Component } from 'react';
// import { Redirect, Link } from 'react-router-dom';

// import User from './User';
// import DeleteUser from './DeleteUser';

// class UserProfile extends Component {
//     render() {
//         if (!this.props.loggedIn){
//             return <Redirect to={`/`} />
//         } else {
//         return (
//             <div>
//                 <h1>PET PROFILE</h1>
//                 <User username={this.props.username} />
//                 <br />
              
//                 <br />
//                 <DeleteUser deleteUser={this.props.deleteUser}/>
//             </div>
//         );}
//     }
// }

// export default UserProfile;

import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link, Redirect } from "react-router-dom"

class User extends Component {
    constructor() {
        super();
        this.state = {
            redirect: false,
            user: {
                id:"",
                username: '',
                pet: '',
                bio: ''
               
            }
        }
    }

    componentWillMount() {
        const id = this.props.match.params.userId;
        axios.get(`/api/user/${id}`).then((res) => {
            this.setState({
                user: {
                    id: res.data._id,
                    username: res.data.username,
                    pet: res.data.pet,
                    bio: res.data.bio,
                 
                }
            })
        })
    }

    _handleDelete = (e, userId) => {
        e.preventDefault();
        axios.get(`/api/user/delete/${userId}`)
            .then(() => console.log('User Deleted'))
            .catch((err) => console.log(err));
        this.setState({ redirect: true })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={'/users'} />;
        } else {
            return (
                <div>
                    <Link to={`/editUser/${this.state.user.id}`}>Edit</Link>
                    <div>User Name: {this.state.user.userName}</div>
                    <div>Pet: {this.state.user.pet}</div>
                    <div>Bio: {this.state.user.bio}</div>
                    <br />
                    <Link to={`/${this.state.user.id}/pets`}>Continue to pets</Link>
                    <br /><br />
                    <button onClick={(e) => this._handleDelete(e, this.state.user.id)}>Delete</button>
                    <br /><br />
                    <Link to={`/users`}>Go back</Link>
                </div>
            );
        }
    }
}

export default User;