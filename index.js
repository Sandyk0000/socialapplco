const express = require('express');
const app = express();

const format = require('date-format');

const PORT = 4000 || process.env.PORT

app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`);
})

app.get("/", (req, res)=>{
    res.status(200).send("Hello, everything is working fine")
})

app.get("/api/v1/instagram", (req, res)=>{
    const instaSocial = {
        username:"sandyk00",
        followers:130,
        following:128,
        date:format.asString("  dd/MM   hh:mm:ss", new Date())
    }

    res.status(200).json(instaSocial)
})

app.get("/api/v1/facebook", (req, res)=>{
    const faceSocial = {
        username:"sandeepkumar",
        followers:140,
        following:128,
        date:format.asString("  dd/MM   hh:mm:ss", new Date())
    }

    res.status(200).json(faceSocial)
})

app.get("/api/v1/linkedin", (req, res)=>{
    const linkedSocial = {
        username:"sandeep",
        followers:118,
        following:110,
        date:format.asString("  dd/MM   hh:mm:ss", new Date()) 
    }

    res.status(200).json(linkedSocial)
})

app.get("/api/v1/:token", (req, res)=>{
    res.status(200).json(req.params.token)
})