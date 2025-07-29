require('@dotenvx/dotenvx').config()


console.log("Starting Backend");
// EXPRESS JS

const express = require('express')
const app = express()
// const port = 5000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/github', (req, res)=>{
    res.send("GitHub UserName: arnab9957")
})

app.get('/login', (req, res)=>{
    res.send("loggedIn")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})

