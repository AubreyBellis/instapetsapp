import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios';
import { Link } from "react-router-dom"

const PetStyle = styled.div`
    img {
        height: 200px;
        width: 500px;
    }
`;

class Pets extends Component {
    constructor() {
        super();
        this.state = {
            user: '',
            userLogged: false,
            pets: []
        }
    }

    componentWillMount() {
        axios.get("/api/pet").then( (res) => {
            this.setState({ pets: res.data });
        }).catch( (error) => {
            console.log(error);
        })

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

    render() {
        return (
            <div>
                <h1>Pets</h1>
                <div>
                 {this.state.userLogged ? <Link to={`/${this.state.user._id}/createPet`}>Add a Pet</Link> :
                    <Link to='/createPet'>Add a new pet!</Link>}  
                {this.state.pets.map( (pet, i) => {
                    return (
                        <PetStyle key={i}>
                        {pet.petName}
                        <img src={pet.image} alt='' />
                        {this.state.userLogged ? <a href={`/${this.state.user._id}/pet/${pet._id}`}>Go to</a> : 
                            <a href={`/pet/${pet._id}`}>Go to</a>}
                        </PetStyle>
                    )
                })}
                <br />
                {this.state.userLogged ? <Link to={`/user/${this.state.user._id}`}>Go back to profile</Link> : null}
                </div>
            </div>
        );
    }
}

export default Pets;