

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
    font-family: 'Press Start 2P', cursive;
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
    constructor() {
        super();
        this.state = {
            user: '',
            redirect: true,
            id: '',
            name: '',
            image: '',
            description: '',
         
        }
    }

    componentWillMount() {
        const id = this.props.match.params.petId;
        axios.get(`/api/pet/${id}`).then((res) => {
            this.setState({
                id: res.data._id,
                name: res.data.name,
                image: res.data.image,
                description: res.data.description,
              
            })
        })
        // GET PET
        if (this.props.match.params.petId) {
            this.setState({
                userLogged: true,
            })
            axios.get(`/api/user/${this.props.match.params.userId}`)
                .then( (res) => {
                    this.setState({pet: res.data});
                })
                .catch( (err) => {
                    console.log(err);
                })
        }
    }
    _handleDelete = (e, petId) => {
        axios.get(`/api/pet/delete/${petId}`)
            .then(() => console.log('Deleted'))
            .catch((err) => console.log(err));
        this.setState({ redirect: true })
    }
    render() {
        if (this.state.redirect) {
            if (this.state.userLogged){
                return <Redirect to={`/${this.state.user._id}/pets`} />;
            } else {
                return <Redirect to={`/pets`} />
            }
        } else {
            return (
                <div>
                    <PetWrapper>
                        {this.state.userLogged ? <Link to={`/${this.state.user._id}/edit/${this.state.id}`}>Edit</Link> :
                            <Link to={`/edit/${this.state.id}`}>Edit</Link>}

                        <h1>Pet Name: {this.state.petname}</h1>
                        <img src= {this.state.image} alt=''></img>
                        <div>Description: {this.state.description}</div>
                        <br />
                        <br />
                        <br />
                        <button onClick={(e) => this._handleDelete(e, this.state.id)}>Delete</button>
                        <br />
                        <br />
                        {this.state.userLogged ? <Link to={`/${this.state.user._id}/pets`}>Go back</Link> :
                            <Link to={`/pets`}>Go back</Link>}
                    </PetWrapper>
                </div>
            );
        }
    }
}

export default Pet;
