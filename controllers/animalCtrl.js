const { join } = require('path');
const chickData = require('../models/chicken');

const chickenNames = chickData.map((chicken)=> chicken.name);

module.exports.newPage = (req,res,err)=>
  res.sendFile(join(__dirname,'../public',`${req.url}.html`))

module.exports.submit = (req,res,err)=>{
  res.send(`No chickns found.KFC got here first and serverd up ${chickenNames.join(' and ')}`)
}
