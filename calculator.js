const express = require('express');
const app = express();

//see the "my-express-server" project for notes about basic express use.

// app.get('/', (req, res) => {
//   res.send("<h1>Hello World!!</h1>")
// });

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.listen('3000', () => {
  console.log("Server is up and running on port 3000")
});