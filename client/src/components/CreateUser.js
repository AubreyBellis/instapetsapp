
import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";

class CreateUser extends Component {
    constructor() {
        super();
        this.state = {
            redirect: false,
            user: {
                id: '',
                username: '',
                pet: '',
                bio: ''
          
            }
        }
    }

    _createUser = (e) => {
        e.preventDefault();
        axios.post('/api/user', this.state.user)
            .then((res) => {
                console.log('new user information');
            })
            .catch((err) => {
                console.log(err);
            })
        this.setState({redirect: true});
    }

    _handleUserChange = (event) => {
        const attributeName = event.target.name;
        const attibuteValue = event.target.value;

        const updateUser = { ...this.state }
        updateUser.user[attributeName] = attibuteValue;
        this.setState(updateUser);
    }


    render() {
        if (this.state.redirect) {
            return <Redirect to={`/users`} />;
        } else {
            return (
                <div>
                    <h1>Create User</h1>
                    <form onSubmit={this._createUser}>
                        <input onChange={this._handleUserChange}
                            type='text'
                            name='username'
                            value={this.state.user.username}
                            placeholder='User Name' />
                        <br />
                        <input onChange={this._handleUserChange}
                            type='text'
                            name='pet'
                            value={this.state.user.pet}
                            placeholder='pet' />
                        <br />
                       <input onChange={this._handleUserChange}
                            type='text'
                            name='bio'
                            value={this.state.user.bio}
                            placeholder='Bio' />
                        <br />
                        <br />
                        <button>Create User</button>
                    </form>
                    <br />
                    <Link to='/users'>Go back</Link>
                </div>
            );
        }
    }
}

export default CreateUser;