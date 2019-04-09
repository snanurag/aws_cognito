const express = require('express');

const app = express();
const path = require('path');
const router = express.Router();
const lambda = require('./access_lambda');

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.

  //add the router
  app.use(express.static(__dirname + '/view'));
  //Store all HTML files in view folder.
  app.use(express.static(__dirname + '/scripts'));
  //Store all JS and CSS in Scripts folder.

});

router.get('/awscognito', function(req,res){
  lambda.cognito_module(req.query.id);
  console.log(req.query);
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
