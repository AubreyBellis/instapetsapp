import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home';
import User from './components/User';
import AddNewPost from './components/AddNewPost';
import LoginView from './components/LoginView';
import Signup from './components/SignUp';
import LoginButton from './components/Login';
import axios from 'axios';


class App extends Component {
  constructor(){
    super()
    this.state = {
        loggedIn: false,
        userId: "",
        username: "",
        image: "",
        loginError: "",
    }
}

_handleLogin = (event) => {
event.preventDefault();

const username = event.target.username.value;
const password = event.target.password.value;

axios.post(`/api/user/login/`, {username, password})
  .then((res) => {
    
    const newState = {...this.state};

    if(res.data.username){
      newState.userId = res.data._id;
      newState.loggedIn = true;
      newState.username = res.data.username;
      newState.image = res.data.image;
      newState.loginError = "";
    } else {
      newState.loginError = res.data;
    };
    this.setState(newState);

  })
  .catch((err) => {
    console.log(err);
  })
}

_handleSignup = (username, password) => {
axios.post('/api/user/signup/', {username, password})
  .then((res) => {
    const newState = {...this.state};
      newState.userId = res.data._id;
      newState.loggedIn = true;
      newState.username = res.data.username;
      newState.image = res.data.firstName;
      newState.loginError = "";

      this.setState(newState);
    })
}

_handleDeleteUser = () => {
axios.get(`/api/user/${this.state.userId}/delete`).then(() => {
  this._handleLogout();
}).catch((err) => {
  console.log("error sending delete");
  console.log(err);
})
}
_handleLogout = (event) => {
  const newState = {...this.state};
  newState.username = "";
  newState.image = "";
  newState.loginError = "";
  newState.loggedIn = false;

  this.setState(newState);
}
   render() {
  const NavBar = styled.div`
    display: flex;
    justify-content: space-between;`

  return (
    <Router>
    <div>
    <div>
      <NavBar>
        <Link to="/">Home</Link>
        <LoginButton loggedIn = {this.state.loggedIn}  handleLogout={this._handleLogout} firstName={this.state.firstName} username={this.state.username}/>
      </NavBar>
    </div>
    <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" render={routeProps => 
            <LoginView {...routeProps} 
              handleLogin={this._handleLogin}
              loginError={this.state.loginError}
              loggedIn={this.state.loggedIn}
              username={this.state.username}
              />} />
        <Route exact path="/signup" render={routeProps => 
            <Signup {...routeProps}
              handleSignup={this._handleSignup}
              loggedIn={this.state.loggedIn}
              />} />
              </div>
            </div>
      </Router>
    );
  }
}

export default App;