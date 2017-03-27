const { Router } = require('express');
const path = require('path');
const {newPage,submit} = require('../controllers/animalCtrl');
const animalRouter = Router();

// animalRouter.use((req,res,next)=>{
//   if(req.user === 'farmer') {
//     next()
//   } else {
//     res.status(403).send('forbidden')
//   }
// })
animalRouter.get('/monkeys', (req,res,next)=>{
  console.log("Fetching some monkeys");
  console.log(`This ran at ${req.requestedTime}`)
  // res.sendFile(path.join(__dirname,'../public' , '/monkeys.html'));//__dirname is the routes here
  newPage(req,res, null);
})

animalRouter.get('/chickens',newPage);

animalRouter.post('/chickens',submit);


module.exports = animalRouter ;
