var bookings = [
    {
        "name":"lewis",
        "room": 1
    },
    {
        "name":"peter",
        "room": 2
    },
    {
        "name":"alex",
        "room": 3
    }
]


console.log("server is starting...");

var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

var server = app.listen(3000, listen);

function listen(){
    console.log("listening on port 3000");
    
}

var con = mysql.createConnection({
    host: "localhost",
    database: "booking_system",
    user: "root",
    password: "",
});



con.connect(function(err){
    if (err) throw err;
    console.log("Connected");  
    con.query('SELECT * FROM bookings', function(err, results){
        if (err) throw err;

        results.forEach(result => {
            console.log(result);
        });
        
    });
});


app.use(express.static('website'));

app.get('/api/bookings', getbookings);
app.post('/api/add', addbooking);

function getbookings(req, res){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.send(bookings);
}

function addbooking(req, res){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);


    console.log(req.body);
    var name = req.body.name;
    var room = req.body.room;

    var objectToPush = {
        name,
        room
    }

    bookings.push(objectToPush);

    res.send(req.body);
 
}