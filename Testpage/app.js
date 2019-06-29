var express = require("express");
var app = express();
var bodyParser = require("body-parser");
// var request = require("request");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");


app.get("/", function (req, res) {
    res.render("page1");
});

app.post("/", (req, res) => {
    console.log(req.body);
    res.redirect("page2");
});

app.get("/page2", function (req, res) {
    res.render("page2");
});

app.post("/page2", (req, res) => {
    console.log(req.body);
    res.redirect("page3");
});

app.get("/page3", function (req, res) {
    res.render("page3");
});

app.post("/page3", (req, res) => {
    console.log(req.body);
});


app.listen(3500, function () {
    console.log("Started listening on port 3500!!!!");
});