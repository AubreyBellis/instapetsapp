
import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import styled from 'styled-components';

class LoginView extends Component {

    render() {
        const LoginDiv = styled.div`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            align-content:center;
            height: 50vh;
            background-color:rgba(237, 237, 144, 0.58);
            p{
                font-color: red;
                font-size: 20px;
            }
        `
        if (this.props.loggedIn){
            return <Redirect to={`/user/${this.props.username}`} />
        }

        return (
            <div>
                <LoginDiv>
                <h1>Login Now <br/> or <Link to="/signup">Sign up!</Link></h1>
               
                {this.props.loginError ? <p>{this.props.loginError}</p> : null}
                <form onSubmit={this.props.handleLogin}>
                    <div>
                    <label htmlFor="username">Username: </label>
                    <input name="username" type="text" required/>  
                    </div>
                    <div>
                    <label htmlFor="password">Password: </label>
                     <input name="password" type="password" required/> 
                    </div>
                    <button>Log in</button>
                </form>
                </LoginDiv>
            </div>
        );
    }
}

export default LoginView;