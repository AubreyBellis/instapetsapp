// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// class Login extends Component {
//     render() {
//         const LoginWrapper = styled.div`
//             display: flex;
//             flex-direction: row;
//             align-content:center;
//             }
        
//         `
//         const loggedIn = this.props.loggedIn;
//         return (
//             <div>
//                 <LoginWrapper>
//                     {loggedIn ? <p> Welcome back, <Link to={`/user/${this.props.username}`}> {this.props.images} </Link> </p> : null }

//                     <div onClick={this.props.handleLogout}>
//                         {loggedIn ? <Link to="/">Log out</Link> : <Link to="/login">Log in</Link>}
//                     </div>
//                 </LoginWrapper>
//             </div>
//         );
//     }
// }

// export default Login;
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LoginUser } from '../styles/User';


class Login extends Component {
    render() {
        return (
            // <LoginUser>
                <div>
                <Link to={`/user`}>Login</Link>
                </div>
            // </LoginUser>
        );
    }
}

export default Login;