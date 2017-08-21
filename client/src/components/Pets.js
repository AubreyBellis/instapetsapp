import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios';
import { Link } from "react-router-dom"
import Pet from './Pet';

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
            id: '',
            petName: '',
            description: '',
            pets: []
        }
    }

    componentWillMount() {
        const id = this.props.match.params.petId;
        axios.get(`/api/pet/${id}`).then((res) => {
            this.setState({
                id: res.data._id,
                petName: res.data.petName,
                description: res.data.description,
             
            })
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
                <buttonStyle>
                    
                    {this.state.userLogged ? <Link to={`/${this.state.user._id}/users/${this.state.id}`}><button className='normalButton'>GO BACK</button></Link> :
                        <Link to={`/users/${this.state.id}`}><button className='normalButton'>GO BACK</button></Link>}
                  
                    <div>{this.state.userName}</div>
                    <PetStyle>
                    {this.state.pets.map( (pet, i) => {
                        return (
                            <Pet key={i} userName={pet.userName}
                                image={pet.image}
                                bio={pet.bio}/>
                        )
                    })}
                    </PetStyle>
                </buttonStyle>
            );
        }
    }


export default Pets;