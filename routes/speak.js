const express = require("express");
const say = require("say");
const router = express.Router();

router.get("/", async (req,res) => {
    say.speak(req.query.words);
    res.sendFile("index.html", { root: "./public" });
});

module.exports = router;