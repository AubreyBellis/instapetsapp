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

class Home extends Component {
    

    render() {
        const TitleDiv = styled.div`
            display: flex;
            flex-direction: column;
            height: 90vh;
            justify-content: center;
            align-items: center;
           
            h1{
            text-align: center;
            align-content:center;
            font-size: 78px;
            font-family: 'Frijole', cursive;
            }
        `
        return (
          <TitleDiv>
              <div>
                <h1>Insta-Pet</h1>
                <img src="http://i.imgur.com/9ZQmEB5.jpg" alt="glasses"/>
                  </div>
            </TitleDiv>  
        );
    }
}

export default Home;