// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// class Home extends Component {

//   render() {
//     return (
//       <div>
//         <h1>Insta-Pet</h1>
//         <form>
//           <input type="text"/>
//           <button>New User</button>
//         </form>

//         <ul>
//           {this.state.users.map((user, i) => {
//             return (
//               <li key={i}>
//                 <Link to={`/user/${user._id}`}> {user.userName}'s Profile </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }
// export default Home;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Background from './BackgroundImage.jpg'

var BackgroundImage = styled.div`
{
    backgroundimage:http://i.imgur.com/9ZQmEB5.jpg"(${Background})
  }`
  

class Home extends Component {
    

    render() {
        const TitleDiv = styled.div`
            display: flex;
            flex-direction: column;
            height: 90vh;
            justify-content: center;
            align-items: center;
            background-image:cover;
           
           
            h1{
            text-align: center;
            align-content:center;
            font-size: 78px;
            
            }
        `
        return (
   
        
          <TitleDiv>
               <h1>Insta-Pet</h1>
              <div>
                <BackgroundImage>
        
                <img src="http://i.imgur.com/cQRk6X4.jpg" alt= "BackgroundImage.jpg"/>
                </BackgroundImage>
                </div>
           </TitleDiv>  
        );
    }
}

export default Home;