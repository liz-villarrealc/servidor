const express = require("express")
// transpilar : 
// EcmaScript - Es modules | import express from "express"
// CommonJS const express = requie("express")
const app = express();

const example = function() {
    console.log("estoy a la escucha")
}

app.listen(
    9000,
    example
    //() => { //callback
        //function() {
        //}
    //}
) 
