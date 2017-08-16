

import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link, Redirect } from "react-router-dom"



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
h3 {
    font-family: 'Press Start 2P', cursive;
    margin-bottom: 0px;
}
`;

const UserInformation = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
width: 75%;
h3 {
    font-family: 'Press Start 2P', cursive;
    padding-right: 10px;
}
`;

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
                    <UserWrapper>
                  
                    <Link to={`/editUser/${this.state.user.id}`}>Edit</Link>
                    <UserContainer>
                  
                   
                    <div>User Name: {this.state.user.username}</div>
                    <div>Pet: {this.state.user.pet}</div>
                    <div>Bio: {this.state.user.bio}</div>
                    <br />
                
                   <Link to={`/${this.state.user.id}/pets`}>Continue to pets</Link>
                    <br /><br />
                    <button onClick={(e) => this._handleDelete(e, this.state.user.id)}>Delete</button>
                    <br /><br />
                    <Link to={`/users`}>Go back</Link>
                    </UserContainer>
                   </UserWrapper>
                </div>
            );
        }
    }
}

export default User;