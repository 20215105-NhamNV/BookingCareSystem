import express from "express";
let configViewEngine = (app) => {
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs");//write html
    app.set("views", "./src/views");//file in views auto in ./src/views
}

module.exports = configViewEngine;
