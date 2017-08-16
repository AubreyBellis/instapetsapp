// import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';

// class Signup extends Component {
//     constructor() {
//         super();
        
//         this.state={
//             doPasswordsMatch: true,
//         }
//     }
//     _handlePasswordConfirm = (event) => {
//         event.preventDefault();

//         const username = event.target.userName;
//         const password = event.target.password;
//         const passwordConfirm = event.target.passwordConfirm.value;

//         if(password !== passwordConfirm){
//             this.setState({doPasswordsMatch: false})
//         } else {
//             this.props.handleSignup(username, password);
//         }    
//     }
//     render() {
//         if(this.props.loggedIn){
//             return <Redirect to={`/user/${this.props.userName}`} />
//         } else {
//         return (
//             <div>
//             {this.state.doPasswordsMatch ? null : <p>passwords don't match</p>}
//                 <form onSubmit={this._handlePasswordConfirm}>
//                     <div>
//                         <label htmlFor="username">Username: </label>
//                         <input name={this.props.userName} type="text" required/>
//                     </div>
//                     <div>
//                         <label htmlFor="password">Password: </label>
//                         <input name={this.props.password} type="text" required/>
//                     </div>
//                     <div>
//                         <label htmlFor="passwordConfirm">Confirm password:</label>
//                         <input name="passwordConfirm" type="password" required/>
//                     </div>
//                         <button>Sign up</button>
//                 </form>
//             </div>
//         );
//     }}
// }

// export default Signup;