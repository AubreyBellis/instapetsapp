// require("dotenv").config();
// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const UserController = require("./controllers/user");
// const PetController = require("./controllers/pet");
// // const BoardController = require("./controllers/board")

// const app = express();
// mongoose.Promise = global.Promise;
// mongoose.connect(process.env.MONGODB_URI); //mongodb://localhost/pets


// const connection = mongoose.connection;
// connection.on('connected', () => {
//   console.log("We're Live Hoes!");    
// }); 

// // If the connection throws an error
// connection.on('error', (err) => {  
//   console.log('Mongoose default connection error: ' + err);
// }); 



// app.use(bodyParser.json());



// // app.use(express.static(__dirname + '/client/build/'));
// app.use('/api/user', UserController);
// app.use('/api/pet', PetController);
// // app.use('/api/board', BoardController);


// // app.get("/", (req, res) => {
// //   res.sendFile(__dirname + "/client/build/index.html");
// // });


// // app.use('/api/userprofile', UserProfileController);





// app.get('/', (req,res) => {
//   res.send('hola betches!')
// })

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log("Magic happening on port " + PORT);
// })

require ('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PetController = require('./controllers/pet');
const UserController = require('./controllers/user');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

const connection = mongoose.connection;
connection.on('connected', () => {
    console.log('Mongoose Connected Successfully');
});

connection.on('error', (err) => {
    console.log(`Mongoose default connection error: ' ${err}`);
})

app.use(express.static(__dirname + '/client/build/'));
app.use(bodyParser.json());

app.use('/api/pets', PetController);
app.use('/api/user', UserController);


app.get('/', (req,res) => {
    console.log("Hello")
    res.sendFile(__dirname + '/client/build/index.html')
  })



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`App is listening on port ` + PORT);
});

