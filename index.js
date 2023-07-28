const express = require("express")
const { readFile } = require("fs")
const app = express()
app.use(express.static('Assets'))
app.get("/", function (req, res) {
    readFile(".\\loader.html", "UTF-8", function (err, data) {
        if (err) {
            res.sendStatus("500").send("Out of Order")
        }

        res.send(data)
    })
})
app.get("/m", function (req, res) {
    readFile(".\\mobile.html", "UTF-8", function (err, data) {
        if (err) {
            res.sendStatus("500").send("Out of Order")
        }

        res.send(data)
    })
})
app.get("/d", function (req, res) {
    readFile(".\\main.html", "UTF-8", function (err, data) {
        if (err) {
            res.sendStatus("500").send("Out of Order")
        }

        res.send(data)
    })
})
app.get("/n", function (req, res) {
    readFile(".\\reject.html", "UTF-8", function (err, data) {
        if (err) {
            res.sendStatus("500").send("Out of Order")
        }

        res.send(data)
    })
})
app.listen(process.env.PORT || 3000, function () {
    console.log("Working in http://localhost:3000")
})