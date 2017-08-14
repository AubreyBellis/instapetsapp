import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Home extends Component {
  constructor(){
    super();
    this.state = {
      users: []
    }
  }

  componentWillMount(){
    axios.get("/api/user").then((res) => {
      this.setState({users: res.data});
    });
  }

  render() {
    return (
      <div>
        <h1>Insta-Pet</h1>
        <form>
          <input type="text"/>
          <button>New User</button>
        </form>

        <ul>
          {this.state.users.map((user, i) => {
            return (
              <li key={i}>
                <Link to={`/user/${user._id}`}> {user.userName}'s Profile </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Home;