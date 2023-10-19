const express = require("express")
    // transpilar : 
    // EcmaScript - Es modules | import express from "express"
    // CommonJS const express = requie("express")
import router from "./src/routes";
const app = express();
const port = 9000;

const example = function() {
    console.log("estoy a la escucha")
}


app.listen(port, example);
//app.listen(
//    9000,
//    example
    //() => { //callback
        //function() {
        //}
    //}
//) 
