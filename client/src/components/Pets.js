import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios';
import { Link } from "react-router-dom"

const PetStyle = styled.div`
    image {
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
            <div>
                <h1>Pets</h1>
                <div>
                 {this.state.userLogged ? <Link to={`/${this.state.user_id}/createpet`}>Add your pet to the pawty!</Link> :
                    <Link to='/createpet'>Join the PAWty!</Link>}  
                {this.state.pets.map( (pet, i) => {
                    return (
                        <div key={i}>
                        {pet.petname}
                        <img src={pet.image} alt='' />
                        {this.state.userLogged ? <a href={`/pets/${pet._id}`}>Go to</a> : 
                            <a href={`/pets/${pet._id}`}>Go to</a>}
                        </div>
                    )
                })}
                <br />
                {this.state.userLogged ? <Link to={`/user/${this.state.user._id}`}>Go back</Link> : null}
                </div>
            </div>
        );
    }
}

export default Pets;