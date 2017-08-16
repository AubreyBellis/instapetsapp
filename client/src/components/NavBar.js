import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Redirect, Link } from 'react-router-dom';

const NavBarStyle = styled.div`
  height: 30px;
  background-color: grey;
  color: blue;
  text-decoration: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  a {
    padding: 0 15px;
    color: white;
    text-decoration: none;
  }
`
class NavBar extends Component {
  render() {
      return (
          <NavBarStyle>
              <a href="/">Pet PAWty</a>
          </NavBarStyle>
      );
  }
}


export default NavBar;