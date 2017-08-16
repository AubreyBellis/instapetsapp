import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"
import Description from './Description'
import styled from 'styled-components';

const DescriptionsStyle = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: 40px;
`;

const buttonStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PetName = styled.h1`
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    font-family: 'Press Start 2P', cursive;
`;

class Descriptions extends Component {
    constructor() {
        super();
        this.state = {
            user: '',
            userLogged: false,
            id: '',
            petname: '',
            image: '',
            breed: '',
            characteristics:'',
            description: []
        }
    }

    componentWillMount() {
        const id = this.props.match.params.petId;
        axios.get(`/api/description/${id}`).then((res) => {
            this.setState({
                id: res.data._id,
                petname: res.data.petname,
                image: res.data.image,
                breed: res.data.breed,
                characteristics: res.data.characteristics,
                description: res.data.description
            })
        })
        // GET USER
        if (this.props.match.params.userId) {
            this.setState({
                userLogged: true,
            })
            axios.get(`/api/user/${this.props.match.params.userId}`)
                .then( (res) => {
                    this.setState({user: res.data});
                })
                .catch( (err) => {
                    console.log(err);
                })
        }
    }

    render() {
            return (
                <buttonStyle>
                    
                    {this.state.userLogged ? <Link to={`/${this.state.user._id}/pet/${this.state.id}`}><button className='normalButton'>GO BACK</button></Link> :
                        <Link to={`/pet/${this.state.id}`}><button className='normalButton'>GO BACK</button></Link>}
                  
                    <PetName>{this.state.petname}</PetName>
                    <DescriptionsStyle>
                    {this.state.descriptions.map( (description, i) => {
                        return (
                            <Description key={i} userName={description.breed}
                               characteristics ={description.characteristics}
                            />
                        )
                    })}
                    </DescriptionsStyle>
                </buttonStyle>
            );
        }
    }


export default Descriptions;