import express from "express";
import bodyParser from "body-parser";
import configViewEngine from "./config/viewEngine";
import initWebRouters from "./route/web";
import connectDB from './config/connectDB';
require("dotenv").config();//dùng để chạy process.env.PORT

let app = express();

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


configViewEngine(app);
initWebRouters(app);

connectDB();

let port = process.env.PORT || 6969;
//port === underfined => port = 6969

app.listen(port, () => {
    //callback
    console.log("backend nodejs is runing on the port:" + port);
})