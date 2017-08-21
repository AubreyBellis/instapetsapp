

import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link, Redirect } from "react-router-dom"

const PetWrapper = styled.div`
display: flex;
justify-content: center;
align-items: space-around;
flex-wrap: wrap;
h1 {
    font-family: 'Lobster', cursive;
    font-size: 50px;
    margin-top: 20px;
    margin-bottom: 0px;
}
img {
    height: 500px;
    width: 800px;
}
`;
class Pet extends Component {
    render() {
            return (
                <PetWrapper>
                    <h3><img src={this.props.image} alt='' />{this.props.petName}</h3>
                    <div>{this.props.bio}</div>
                </PetWrapper>
            );
        }
    }


export default Pet;
