
import React, {Component} from  'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import AddNewPost from './components/AddNewPost';
import axios from 'axios';


class App extends Component {
     constructor() {
      super();
  
      this.state = {
        userProfile: [],
        imgBoard: []
      }
    }

    componentWillMount(){
    axios.get("/api/userProfile").then((res) => {
      const newState = {...this.state}
      newState.userProfile = res.data.map((user) => {
        newState.userProfile.push(user)
        console.log(user)
        this.setState(newState);
      })
    });
  }
  render() {
    return (
      <Router>
        <div>
        <div>
        <Route exact path="/" component={Home}/>
        <Route path="/userProfile" component={UserProfile}/>
        <Route path="/addnewpost" component={AddNewPost}/>
        </div>
        </div>
      </Router>
    );
  }
}

export default App;
