const development = process.env.DEBUG === undefined
const port = process.env.PORT || 3000
const express = require('express');
const app = express()

app.use('/static', express.static('static'));

development && app.all("/api/*", (req, res)=>{
    res.status(404)
})

app.all("*", (req, res)=>{
    res.sendFile(__dirname + "/templates/index.html");
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})