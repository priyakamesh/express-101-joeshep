'use strict';

const express = require('express');
const app = express();

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
app.get('/monkeys', (req,res,next)=>{
  console.log("Fetching some monkeys");
  console.log(`This ran at ${req.requestedTime}`)
  res.sendFile(__dirname + '/public/monkeys.html');
})

app.get('/chickens', (req,res,next)=>{
  res.send(`<h3>No chickens for you</h3><form method="POST"><input type="text"><button type="submit">push</button></form>`)
});

app.post('/chickens',(req,res,next)=>{
  console.log("Posting chicken request");
});

app.use((req,res)=>{//last middleware in the stack
  res.send('no fred')
})


app.listen(8080,()=>{
  console.log('server listening on port 8080')
});
