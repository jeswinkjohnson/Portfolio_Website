const express = require("express")
const { readFile } = require("fs")
const app = express()
app.use(express.static('/app/Assets'))
app.get("/", function (req, res) {
    console.log("Current directory:", __dirname);
    readFile("/app/loader.html", "UTF-8", function (err, data) {
        if (err) {
            res.sendStatus("500").send("Out of Order")
        }

        res.send(data)
    })
})
app.get("/m", function (req, res) {
    readFile("/app/mobile.html", "UTF-8", function (err, data) {
        if (err) {
            res.sendStatus("500").send("Out of Order")
        }

        res.send(data)
    })
})
app.get("/d", function (req, res) {
    readFile("/app/main.html", "UTF-8", function (err, data) {
        if (err) {
            res.sendStatus("500").send("Out of Order")
        }

        res.send(data)
    })
})
app.get("/n", function (req, res) {
    readFile("/app/reject.html", "UTF-8", function (err, data) {
        if (err) {
            res.sendStatus("500").send("Out of Order")
        }

        res.send(data)
    })
})
var port = process.env.PORT || 3000
app.listen(port, function () {
    console.log(port)
    console.log(__dirname)
})
