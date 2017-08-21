import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
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
flex-direction: column;
justify-content: center;
width: 100%;
padding-bottom: 20px;
h3 {
    font-family: 'Lobster', cursive;
    margin-bottom: 0px;
}
`

class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: []
            }
        }
    
    componentWillMount() {
        axios.get('/api/user')
            .then((res) => {
            this.setState({
                users: res.data
            })
         })
    }

    render() {
        return (
            <UserWrapper>
                {this.state.users.map( (user, i) => {
                    return (
                        <UserContainer key={i}>
                        <h3>{user.userName}</h3>
                        <br />
                        <a href={`/user/${user._id}`}>
                        <br />
                        <button className='normalButton'>Log in</button></a>
                        </UserContainer>
                    )
                })}
                <UserContainer>
                <Link to={`/createUser`}><button className='normalButton'>Create a new user here!</button></Link>
                </UserContainer>
            </UserWrapper>
        );
    }
}

export default Users;
