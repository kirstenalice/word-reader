const express = require("express");
const bodyParser = require('body-parser');
const say = require('say');
const app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.get("/", async (req,res) => {
  try{
      say.speak(req.query.words);
  } catch (err) {
     console.log(err); 
  }
  
  res.sendFile("index.html", { root: "./public" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Speech Server");
});
