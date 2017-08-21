
import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';

const HomePageStyling = styled.div`
    display: flex;
    justify-content: center;
    align-content: space-around;
    flex-wrap: wrap;
    padding-bottom: 40px;
    font-family: 'Lobster', cursive;

    h3{
        align-content: center;
        justify-content:center;
        text-align:center;
        font-family: 'Lobster', cursive;
    }
`

const HomePageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    h3{
        align-content: center;
        justify-content:center;
    }
`;

class Homepage extends Component {
    render() {
        return (
            <HomePageStyling>
                <HomePageContainer>
                    <h1>Pet Guide.</h1>
                </HomePageContainer>
                <HomePageContainer>
                <img src="http://i.imgur.com/zIP5lE2.jpg" alt="pet.jpg"/>
                </HomePageContainer>  
                <HomePageContainer> 
                <br />
                <br />
                <br />
                <br />
                <h3> Create an account, check out breeds and descriptions of others, find the perfect badass breed for you!</h3>
                </HomePageContainer>
                <HomePageContainer>
                    <Link to='/users'><button className='normalButton'>Pet Ma & Pa's</button></Link>
                </HomePageContainer>
             </HomePageStyling> 
        );
    }
}
export default Homepage;