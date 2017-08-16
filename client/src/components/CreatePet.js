import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";
import styled from 'styled-components';
import Description from './Description'; 


///////STYLE

const PetContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
padding-bottom: 20px;
h3 {
    font-family: 'Press Start 2P', cursive;
    margin-bottom: 0px;
}
`;

const PetInformation = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
width: 75%;
h3 {
    font-family: 'Press Start 2P', cursive;
    padding-right: 10px;
}
`;

const DescriptionForm = props => {
    return (
        <div>
            <PetContainer>
                <PetInformation>
            <input onChange={e => props._handleDescriptionChange(e, props.index)}
                index={props.index}
                value={props.description.breed}
                name='breed'
                type='text'
                placeholder='Tell us about your pawls' />
                </PetInformation>
                <PetInformation>
            <input onChange={e => props._handleDescriptionChange(e, props.index)}
                index={props.index}
                value={props.description.characteristics}
                name='characteristics'
                type='text'
                placeholder='Favorite traits' />
                </PetInformation>
                 <br />
            <br />
            </PetContainer>
        </div>
    )
}

class CreatePet extends Component {
    constructor() {
        super();
        this.state = {
            user: '',
            userLogged: false,
            redirect: false,
            pet: {
                petname: '',
                image: '',
                description: [
                    {
                        breed: '',
                        characteristics: '',
                    },
                    {
                        breed: '',
                        characteristics: '',
        
                    },
                    {
                        breed: '',
                        characteristics: '',
                      
                    }
                   
                ]
            }
        }
    }

    componentWillMount() {
        // Get user
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

    _createPet = (e) => {
        e.preventDefault();
        axios.post('/api/pet', {
            petname: this.state.petname,
            image: this.state.image,
            description: this.state.description
        })
        
    }

    _handlePetChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        const newState = {
            [name]: value
        };
        
        this.setState(newState);
        // const attributeName = event.target.name;
        // const attibuteValue = event.target.value;

        // const updatePet = { ...this.state.pet }
        // updatePet[attributeName] = attibuteValue;
        // this.setState({ pet: updatePet})
    }

    // _handlePetChange = (event, index) => {
    //     const attributeName = event.target.name;
    //     const attributeValue = event.target.value;

    //     const newState = { ...this.state.pet };

    //     newState.updatePet[index][attributeName] = attributeValue;
    //     this.setState({ pet: newState });
    // }

    render() {
        if (this.state.redirect) {
            if (this.state.userLogged) { 
                return <Redirect to={`/${this.state.user._id}/pets`} /> 
            } else {
                 return <Redirect to={`/pets`} />
            }
        } else {
            return (
                <div>
                    <h1>Create a new pet for the PAWty</h1>
                    <form onSubmit={this._createPet}>
                        <input onChange={(e) => this._handlePetChange(e)}
                            type='text'
                            name='petname'
                            value={this.state.petname}
                            placeholder='Pet Breed' />
                        <br />
                    <input onChange={this._handlePetChange}
                            type='text'
                            name='image'
                            value={this.state.image}
                            placeholder='Fav Qualities' />
                        <br />
                        <input onChange={this._handlePetChange}
                            type='text'
                            name='description'
                            value={this.state.description}
                            placeholder='Fav Qualities' />
                        <br />
                        {/* {this.state.pet.description.map((description, i) => {
                            return (
                                <Description  _handlePetChange={this._handlePetChange}
                                    key={i}
                                    index={i}
                                    description={description} />)
                        })} */}
                        <button>Create Pet</button>
                    </form>
                    <br />
                    {this.state.userLogged ? <Link to={`/${this.state.user._id}/pets`}>Go back</Link> :
                        <Link to='/pets'>Go back</Link>}
                </div>
            );
        }
    }
}

export default CreatePet;