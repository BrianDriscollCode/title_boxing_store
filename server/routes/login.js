const mysql = require("mysql");
const express = require("express");
const router = express.Router();
const db = require('./AWS_CONNECTION');

let connected = "not yet connected";

let accounts;
console.log("login js started")

router.route('/')
    .get((req,res) => {
        console.log('test')
        db.query(`SELECT * FROM accounts`, function (err, result, field) {

            if (err) throw err;
            console.log(result);
            accounts = result;
            res.send(accounts)

        })
    })
    .post((req, res) => {
        let queryString = 'SELECT * FROM accounts WHERE (username = ' + `"` + req.body.data.username + `"` + ' AND ' + "password" +` = "` + req.body.data.password + `"` + ')'; 

        db.query(queryString, function (err, result, field) {

            if (err) throw err;
            console.log(result, "-result");
            console.log(req.body.data.username, "-username")
            single_account = result;
            res.send(single_account)
    
    
        })  
        
    })

module.exports = router;