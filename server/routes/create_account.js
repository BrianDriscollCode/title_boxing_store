const mysql = require("mysql");
var express = require("express");
var router = express.Router();
var db = require('./AWS_CONNECTION')

let connected = "not yet connected"


router.route('/')
    .post((req, res) => {
        let queryString = `INSERT INTO accounts (username, currently_active, password, cart, phone_number) VALUES ('` + req.body.data.username + `', false, "` + req.body.data.password + `", "[]", "` + req.body.data.phone_number + `")`

        db.query(queryString, function (err, result, field) {

            res.send;
    
        })  
    })

router.route('/compare')
    .post((req, res) => {
            
        let queryString2 = 'SELECT * FROM all_accounts WHERE username = ' + `"` + req.body.data.username + `"`;
        //let queryString = `INSERT INTO all_accounts (username) VALUES ("` + req.body.data.username + `")`
        //let queryString2 = 'SELECT * FROM accounts';
        console.log("compare query run")
        db.query(queryString2, function (err, result, field) {
            
            let account_name = result;
            console.log(req.body.data.username, "username");
            res.send(result);

        })
    })
    

module.exports = router