import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";

class EditUser extends Component {
    constructor() {
        super();
        this.state = {
            redirect: false,
            user: {
                _id: '',
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
                    _id: res.data._id,
                    username: res.data.username,
                    pet: res.data.pet,
                    bio: res.data.bio
                   
                }
            })
        })
            .catch((err) => {
                console.log(err);
            })
    }

    _editUser = (e) => {
        e.preventDefault();
        axios.put('/api/user', this.state.user)
            .then((res) => {
                console.log('edited user information');
            })
            .catch((err) => {
                console.log(err);
            })
        this.setState({ redirect: true });
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
            return <Redirect to={`/user/${this.state.user._id}`} />;
        } else {
            return (
                <div>
                    <h1>Edit User</h1>
                    <form onSubmit={this._editUser}>
                        <input onChange={this._handleUserChange}
                            type='text' name='username'
                            value={this.state.user.username}
                            placeholder='User Name' />
                        <br />
                        <input onChange={this._handleUserChange}
                            type='text' name='pet'
                            value={this.state.user.pet}
                            placeholder='Pet' />
                        <br />
                        <input onChange={this._handleUserChange}
                            type='text'
                            name='bio'
                            value={this.state.user.bio}
                            placeholder='Bio' />
                        <br />
                        <br />
                        <button>Submit Changes</button>
                    </form>
                    <br />
                    <Link to={`/user/${this.state.user._id}`}>Go back</Link>
                </div>
            );
        }
    }
}

export default EditUser;