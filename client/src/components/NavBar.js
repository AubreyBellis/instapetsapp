import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Redirect, Link } from 'react-router-dom';

const NavBarStyle = styled.div`
  height: 30px;
  background-color: rgba(252, 212, 252, 0.76);
  color: blue;
  text-decoration: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  a {
    font-family: 'Lobster', cursive;
    padding: 0 15px;
    color: black;
    text-decoration: underline;
  }
`
class NavBar extends Component {
  render() {
      return (
          <NavBarStyle>
              <a href="/">Pet Guide</a>
          </NavBarStyle>
      );
  }
}


export default NavBar;