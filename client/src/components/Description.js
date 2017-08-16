import React, { Component } from 'react';
import styled from 'styled-components';


const DescriptionStyle = styled.div`
    background-color: #1a1a1a;
    color: white;
    width: 500px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 20px;
    font-size: 80%;
    font-family: Helvetica;
`

class Description extends Component {
    render() {
            return (
                <DescriptionStyle>
            <h3>{this.props.breed}</h3>
                <div>{this.props.characteristics}</div>
                </DescriptionStyle>
            );
        }
    }


export default Description;