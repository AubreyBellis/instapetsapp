
// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// // import Background from './BackgroundImage.jpg'


// // var BackgroundImage = styled.div`

// //     backgroundimage:http://i.imgur.com/9ZQmEB5.jpg"(${Background})
// //   `
  

// class Home extends Component {
    

//     render() {
//         const TitleDiv = styled.div`
//             display: flex;
//             flex-direction: column;
//             height: 110vh;
//             justify-content: center;
//             align-items: center;
//             background-image:cover;
           
           
//             h1{
//             text-align: center;
//             align-content:center;
//             font-size: 78px;
            
//             }
//             h2{
//                 text-align:center;
//                 align-content:center;
//                 justify-content:center;
//             }
//         `
//         return (

//           <TitleDiv>
//               <div>
//                <h1>Insta-Pet</h1>
//                </div>
//               <div>
//                 <p>
//                 <img src="http://i.imgur.com/cQRk6X4.jpg" alt= "BackgroundImage.jpg"/>
//                 </p>
//                 <h2>
//                 <Link to ='/userProfile'>Pet Profiles</Link>
//                 </h2>
//                 </div>
//            </TitleDiv>  
//         );
//     }
// }

// export default Home;
import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';

const HomePageStyling = styled.div`
    display: flex;
    justify-content: center;
    align-content: space-around;
    flex-wrap: wrap;
    padding-bottom: 40px;
    h1 {
        font-family: 'Press Start 2P', cursive;
    }
`;

const HomePageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

class Homepage extends Component {
    render() {
        return (
            <HomePageStyling>
                <HomePageContainer>
                    <h1>Welcome</h1>
                </HomePageContainer>
                <HomePageContainer>
                    <h1>to</h1>
                </HomePageContainer>
                <HomePageContainer>
                    <h1>PetPro</h1>
                </HomePageContainer>
                <HomePageContainer>
                    <Link to='/pets/'><button className='normalButton'>Pet's Here</button></Link>
                </HomePageContainer>    
                <br /><br /><br />
                <HomePageContainer>
                    <Link to='/users'><button className='normalButton'>User Login</button></Link>
                </HomePageContainer>
            </HomePageStyling>
        );
    }
}

export default Homepage;