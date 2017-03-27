const { Router } = require('express');
const path = require('path');

const foodRouter = Router();

foodRouter.get('/food',(req,res,next)=>{
  res.sendFile(path.join(__dirname,'../public','food.html'));
  console.log("Different types of food")
});
foodRouter.get('/foodsearch',(req,res,next)=>{
  res.send(`<h3>Search for Games</h3><form method="POST"><input type="text"><button type="submit">push</button>`);
});
foodRouter.post('/foodsearch',(req,res,next)=>{
  console.log('searching');
  res.send('Searching');
  // next()
});

module.exports = foodRouter;
