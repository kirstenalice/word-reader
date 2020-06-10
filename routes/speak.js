const express = require("express");
const say = require("say");
const router = express.Router();

router.get("/", async (req,res) => {
    try{
        say.speak(req.query.words);
    } catch (err) {
       console.log(err); 
    }
    res.sendFile("index.html", { root: "./public" });
});

module.exports = router;