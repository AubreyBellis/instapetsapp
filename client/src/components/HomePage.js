
import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';

const HomePageStyling = styled.div`
    display: flex;
    justify-content: center;
    align-content: space-around;
    flex-wrap: wrap;
    padding-bottom: 40px;
    h1 {
        font-family: 'Press Start 2P', cursive;
    }
`;

const HomePageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

class Homepage extends Component {
    render() {
        return (
            <HomePageStyling>
                <HomePageContainer>
                    <h1>Pet PAWty.</h1>
                </HomePageContainer>
                <HomePageContainer>
                <img src="http://i.imgur.com/cQRk6X4.jpg" alt="BackgroundImage.jpg"/>
                </HomePageContainer>
                <HomePageContainer>
                    <Link to='/pets/'><button className='normalButton'>Pet's Here</button></Link>
                </HomePageContainer>    
                <br /><br /><br />
                <HomePageContainer>
                    <Link to='/users'><button className='normalButton'>User Login</button></Link>
                </HomePageContainer>
             </HomePageStyling> 
        );
    }
}
export default Homepage;