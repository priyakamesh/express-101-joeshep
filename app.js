'use strict';

require('dotenv').config();//look for .env file
const express = require('express');
const app = express();
//routes modules
const animalRoutes = require('./routes/animals');
const games = require('./routes/games');
//middleware are placed b/w request and a response (example: transform stream)
const requestTime = (req,res,next)=>{//req,res and next objects are available for all the middlewares
  req.requestedTime = Date.now();
  next();//this is very imp,if no next it will hang
};

// const printTime = (req,res,next)=>{
//   console.log(req.requestedTime);
//   next();
// };
//static is an express middleware function
app.use(express.static(__dirname + '/public')) //tell express to add this to middleware

app.use(requestTime)
app.use(animalRoutes)
app.use(games)
app.use((req,res)=>{//last middleware in the stack
  res.send('no fred')
})

const port = process.env.PORT || 8080;
app.listen(port,()=>{
  console.log(`server listening on port ${port}`)
});
