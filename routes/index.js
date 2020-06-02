const express = require("express");
const speakRoutes = require("./speak");

const constructorMethod = (app) => {
    app.use("/speak",speakRoutes);
    
    app.use("*", (req,res) => {
        res.sendFile("index.html", { root: "./public" });
    });
};

module.exports = constructorMethod; 