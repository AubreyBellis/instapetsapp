import React, { Component } from 'react';
import axios from 'axios';

class User extends Component {
    constructor(){
        super();
        this.state = {
            editUserName: false,
            editPassword: false,
            image: "",
            joinDate:Date
           
        }
    }
    componentWillMount() {
        const userId = this.props.userId;

        axios.get(`/api/user/${userId}`).then((res) => {
            const newState = {...this.state};
            newState.username = res.data.username;
            newState.pet = res.data.pet
            newState.image = res.data.image;
           
            newState.userId = userId;

            this.setState(newState);
        });

    }

    _toggleEditForm = () => {
        const newState = {...this.state};
        newState.editName = !this.state.editName;

        this.setState(newState);
    }
    _togglePasswordForm = () => {
        const newState = {...this.state};
        newState.editPassword = !this.state.editPassword;

        this.setState(newState);
    }
    _updatePassword = (event) => {
        event.preventDefault();

        const oldPassword = event.target.oldPassword.value;
        const newPassword = event.target.newPassword.value;
        const newPasswordConfirm = event.target.newPasswordConfirm.value;

        if (!(newPassword === newPasswordConfirm)){
            console.log("passwords do not match");
            const newState = {...this.state};
            newState.updatePasswordError = "passwords do not match"
            this.setState(newState);
        } else {
        axios.put(`/api/user/${this.state.userId}/password/`, {oldPassword, newPassword}).then((res) =>{
            const newState = {...this.state};
            newState.updatePasswordError = res.data;
            this.setState(newState);
        })}
    }

    _updateUserName = (event) => {
        event.preventDefault();

        const username = event.target.username.value;
       

        this.props.updateName(username);

        const newState ={...this.state};
        newState.editName = false;
        this.setState(newState); 
    }
    render() {
        return (
            <div>
                <p>username: {this.state.admin ? `[ADMIN]:` : null}{this.state.username}</p>
                <p>{`Name: ${this.props.username} ${this.props.pet}`}</p>
                <button onClick={this._toggleEditForm}>{this.state.editName ? "hide" : "edit"}</button>
                <form onSubmit={this._updateName}>
                    {this.state.editName ?  
                        <input name="username" type="text" placeholder={this.props.username}/>
                        : null}
                    {this.state.editName ?  
                        <input name="pet" type="text" placeholder={this.props.pet}/>
                        : null}
                    {this.state.editName ?  
                        <button>update</button>
                        : null}
                </form>
                <p>Date joined: {this.state.joinDate}</p>
                <button onClick={this._togglePasswordForm}>{this.state.editPassword ? "hide":"change password"}</button>
                <form onSubmit={this._updatePassword}>
                    {this.state.editPassword ?  
                        <input type="password" placeholder="old password" name="oldPassword" required/>
                        : null}
                    {this.state.editPassword ?  
                        <input type="password" placeholder="new password" name="newPassword" required/>
                        : null}
                    {this.state.editPassword ?  
                        <input type="password" placeholder="confirm new password" name="newPasswordConfirm" required/>
                        : null}
                    {this.state.editPassword ?  
                        <button>update</button>
                        : null}
                </form>
                {this.state.updatePasswordError ? this.state.updatePasswordError : null}
            </div> 
        );
    }
}

export default User;