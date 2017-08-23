

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Pets from './components/Pets';
import Pet from './components/Pet';
import CreatePet from './components/CreatePet';
// import EditPet from './components/EditPet';
// import Party from './components/Party';
import Users from './components/Users';
import HomePage from './components/HomePage';
import User from './components/User';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import styled from 'styled-components';
import NavBar from './components/NavBar';
// import Parties from './components/Parties';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
   
          <Route exact path='/' component={HomePage} />
          <Route exact path='/pets' component={Pets} />
          <Route exact path='/pet/:petId' component={Pet} />
          <Route exact path='/createPet' component={CreatePet} />
          {/* <Route exact path='/edit/:partyId' component={EditParty} /> */} 
          {/* <Route exact path='/parties/:petId' component={Parties} /> */}
          <Route exact path='/users' component={Users} />
          <Route exact path='/user/:userId' component={User} />
          <Route exact path='/createUser'component={CreateUser} />
          <Route exact path='/editUser/:userId' component={EditUser} />

          <Route exact path='/:userId/pets' component={Pets} />
          <Route exact path='/:userId/pet/:petId' component={Pet} />
          <Route exact path='/:userId/createPet' component={CreatePet} />
          {/* <Route exact path='/:userId/edit/:petId' component={EditPet} /> */}
          {/* <Route exact path='/:userId/party/:petId' component={Party} />  */}
        </div>
      </Router>
    );
  }
}

export default App;