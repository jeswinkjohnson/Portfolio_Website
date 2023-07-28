const express = require("express")
const { readFile } = require("fs")
const app = express()
app.use(express.static('/opt/render/project/src/Assets'))
app.get("/", function (req, res) {
    readFile("/opt/render/project/src/loader.html", "UTF-8", function (err, data) {
        if (err) {
            res.sendStatus("500").send("Out of Order")
        }

        res.send(data)
    })
})
app.get("/m", function (req, res) {
    readFile("/opt/render/project/src/mobile.html", "UTF-8", function (err, data) {
        if (err) {
            res.sendStatus("500").send("Out of Order")
        }

        res.send(data)
    })
})
app.get("/d", function (req, res) {
    readFile("/opt/render/project/src/main.html", "UTF-8", function (err, data) {
        if (err) {
            res.sendStatus("500").send("Out of Order")
        }

        res.send(data)
    })
})
app.get("/n", function (req, res) {
    readFile("/opt/render/project/src/reject.html", "UTF-8", function (err, data) {
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