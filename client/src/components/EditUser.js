import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";
import styled from 'styled-components';

const UserWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-content: space-around;
    flex-wrap: wrap;
    padding-top: 20px;
    font-size: 18px;
    
`;

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-bottom: 20px;
    h1 {
        font-family: 'Press Start 2P', cursive;
        margin-bottom: 0px;
    }
`;

class EditUser extends Component {
    constructor() {
        super();
        this.state = {
            redirect: false,
            user: {
                _id: '',
                userName: '',
                firstName: '',
                lastName: '',
                email: '',
                pet: '',
            }
        }
    }

    componentWillMount() {
        const id = this.props.match.params.userId;
        axios.get(`/api/user/${id}`).then((res) => {
            this.setState({
                user: {
                    _id: res.data._id,
                    userName: res.data.userName,
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    email: res.data.email,
                    pet: res.data.pet,
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
                console.log('Sucessfully sent edited user information');
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
                <UserWrapper>
                    <UserContainer>
                    <h1>Edit User</h1>
                    </UserContainer>
                    <form onSubmit={this._editUser}>
                        <UserContainer>
                        <input onChange={this._handleUserChange}
                            type='text' name='userName'
                            value={this.state.user.userName}
                            placeholder='User Name' />
                        </UserContainer>
                        <UserContainer>
                        <input onChange={this._handleUserChange}
                            type='text' name='firstName'
                            value={this.state.user.firstName}
                            placeholder='First Name' />
                        </UserContainer>
                        <UserContainer>
                        <input onChange={this._handleUserChange}
                            type='text'
                            name='lastName'
                            value={this.state.user.lastName}
                            placeholder='Last Name' />
                        </UserContainer>
                        <UserContainer>
                        <input onChange={this._handleUserChange}
                            type='text'
                            name='email'
                            value={this.state.user.email}
                            placeholder='Email' />
                        </UserContainer>
                        <UserContainer>
                        <input onChange={this._handleUserChange}
                            type='text'
                            name='pet'
                            value={this.state.user.pet}
                            placeholder='pet' />
                        </UserContainer>
                        <UserContainer>
                        <button className='normalButton'>Submit</button>
                        </UserContainer>
                    </form>
                    <UserContainer>
                    <Link to={`/user/${this.state.user._id}`}><button className='normalButton'>Backzie</button></Link>
                    </UserContainer>
                </UserWrapper>
            );
        }
    }
}

export default EditUser;