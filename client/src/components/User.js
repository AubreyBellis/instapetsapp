

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
flex-direction: row;
width: 100%;
padding-bottom: 20px;
h3, h4 {
    font-family: 'Lobster', cursive;
    margin-bottom: 0px;
}
`;

const UserInformation = styled.div`
display: flex;
align-items: center;
flex-direction:row;
align-content: center;
justify-content: space-between;
flex-wrap: wrap;
width: 75%;
{
    font-family: 'Lobster', cursive;
    padding-right: 10px;
}
`;

class User extends Component {
    constructor() {
        super();
        this.state = {
            redirect: false,
            user: {
                id: '',
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
                    id: res.data._id,
                    userName: res.data.userName,
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    email: res.data.email,
                    pet: res.data.pet,
                
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
                <UserWrapper>
                     <UserInformation>
                    <div><h4>User Name: </h4>{this.state.user.userName}</div>
                    <div><h4>First Name: </h4>{this.state.user.firstName}</div>
                    <div><h4>Last Name: </h4>{this.state.user.lastName}</div>
                    <div><h4>Email: </h4>{this.state.user.email}</div>
                    <div><h3>Pet: </h3>{this.state.user.pet}</div>
                    <br />
                    </UserInformation>
                    <br />
                    <UserContainer>
                    <Link to={`/editUser/${this.state.user.id}`}><button className='normalButton'>Edit</button></Link>
                    </UserContainer>
                    <br />
                    <UserContainer>
                    <Link to={`/${this.state.user.id}/pets`}><button className='normalbutton'>Continue to Pets</button></Link>
                    </UserContainer>
                    <br />
                    <UserContainer>
                    <button className='normalButton' onClick={(e) => this._handleDelete(e, this.state.user.id)}>Delete</button>
                    </UserContainer>
                    <br />
                    <UserContainer>
                    <Link to={`/users`}><button className='normalButton'>GO BACK</button></Link>
                    </UserContainer>
                </UserWrapper>
            );
        }
    }
}

export default User;
