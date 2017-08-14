import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class UserProfile extends Component {
    render() {
      return (
          <div>
            <h1>Pet Profiles</h1>
              <br></br>
              <Link to='/addnewpost'>New Post</Link>
              <br></br>
              <Link to ='/'>Back Home</Link>
          </div>
      );
    }
  }
  
  export default UserProfile;

