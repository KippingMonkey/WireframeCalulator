const express = require('express'); //bring 'express' into the code
const bodyParser = require('body-parser'); //bring 'body-parser into the code

const app = express(); //creata a variable to use its functions
//body-parser works with express so we tell express to use those functions.
//what it does is to parse the data sent by a POST-request and there are several variants
//to choose from like; text, json and the one we use here urlencoded.
//the urlencoded is specifically used when receiving data from html forms.
//NOTE: the parameter 'extended: true' is required even its function is not used.
app.use(bodyParser.urlencoded({extended: true}));


//see the "my-express-server" project for notes about basic express use.

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.post('/', (req, res) => {
  res.send(req.body);
})
app.listen('3000', () => {
  console.log("Server is up and running on port 3000")
});