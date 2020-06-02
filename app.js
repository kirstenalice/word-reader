const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const configRoutes = require("./routes");

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

configRoutes(app);

app.listen(3000, () => {
  console.log("Speech Server");
  console.log("Your routes will be running on http://localhost:3000");
});
