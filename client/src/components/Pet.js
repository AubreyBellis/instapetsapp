// import React, {Component} from "react";
// import $ from "jquery";
// import {Link} from "react-router";



// class AddNewPost extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             newTitle:"",
//             newImage:"",
//             newText:""
//             // lengthDialog:false,
//             // titleLengthDialog:false
//         }
//     }
//     submitNewPost(){
//         if(!this.state.newTitle || !this.state.newText ){
//             return false;
//         }
//         let submitObject = {
//             title:this.state.newTitle,
//             image:this.state.newImage,
//             text:this.state.newText
//         };
//         console.log("data I'm sending is", submitObject);
//         $.ajax({
//             url:"/api/posts",
//             data:JSON.stringify(submitObject),
//             type:"POST",
//             contentType:"application/json",
//             success:function(){
                
//             this.setState({newTitle:"", newImage:"", newText:""});
//             }.bind(this),
//             error:function(error){
//                 console.error(error.toString());
//             }
//         });
//     };
//     render(){
//         console.log("rendering AddNewPost component");
//         return(
//             <div>
//                 <h1>New Post</h1>
//                 </div>
//         );
//     }
// }
// export default AddNewPost;
        
//     //         <form>
//     //         (<Input text={this.state.newTitle} onChange={this.titleChange.bind(this)} placeholder="Post title"/>)<br/>
//     //         (<Input value={this.state.newImage} onChange={this.imageChange.bind(this)} placeholder="Post image"/>)<br />
//     //         <Link to ="/">Back Home</Link>
//     //         </form>
//     //         )
//     //     }
//     // }


import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link, Redirect } from "react-router-dom"


class Pet extends Component {
    constructor() {
        super();
        this.state = {
            user: '',
            redirect: false,
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
                    {/* <IndividualPartyStyle> */}
                        {this.state.userLogged ? <Link to={`/${this.state.user._id}/edit/${this.state.id}`}>Edit</Link> :
                            <Link to={`/edit/${this.state.id}`}>Edit</Link>}

                        <h1>Pet Name: {this.state.petname}</h1>
                        <img src={this.state.image} alt=''></img>
                        <div>Description: {this.state.description}</div>
                        <br />
                        <br />
                        <br />
                        <button onClick={(e) => this._handleDelete(e, this.state.id)}>Delete</button>
                        <br /><br />
                        {this.state.userLogged ? <Link to={`/${this.state.user._id}/pets`}>Go back</Link> :
                            <Link to={`/pets`}>Go back</Link>}
                    {/* </IndividualPartyStyle> */}
                </div>
            );
        }
    }
}

export default Pet;
