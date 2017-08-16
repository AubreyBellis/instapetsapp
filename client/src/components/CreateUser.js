
import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";
import styled from 'styled-components';

//STYLE
const UserContainer = styled.div`
display: flex;
align-items: center;
justift-direction:column;
justify-content: center;
width: 100%;
padding-bottom: 20px;
h1{
    font-family: 'Press Start 2P', cursive;
    margin-bottom: 0px;
}
`
const UserWrapper = styled.div`
display: flex;
justify-content: center;
align-content: space-around;
flex-wrap: wrap;
padding-top: 20px;
font-size: 18px;

`;

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
                console.log('new user created');
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
                    <UserWrapper>
                    
                    <h1>Create User</h1>
                    <UserContainer>
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
                            placeholder='Pet' />
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
                    </UserContainer>
                    <br />
                    <Link to='/users'>Go back</Link>
                  
                    </UserWrapper>
                </div>
            );
        }
    }
}

export default CreateUser;