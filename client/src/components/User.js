import React, { Component } from 'react';
import axios from 'axios';

class User extends Component {
  constructor(){
    super();
    this.state = {
      id: "",
      userName: "",
      pet: "",
      img: []
    }
  }

  componentWillMount(){
    const id = this.props.match.params.userId;
    axios.get(`/api/user/${id}`).then((res) => {
      this.setState({
        id: res.data._id,
        user: res.data.user,
        pet: res.data.pet,
        img: res.data.img
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Insta-Pet</h1>
        <h3>Welcome Back {this.state.userName}</h3>
        <h3>Pet: {this.state.pet}</h3>
      </div>
    );
  }
}

export default User;