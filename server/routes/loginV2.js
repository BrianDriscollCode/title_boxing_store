const mysql = require("mysql");
const express = require("express");
const router = express.Router();
const db = require('./AWS_CONNECTION');

let accounts;
console.log("loginV2 js started")

router.route('/')
    .post((req, res) => {
        let queryString = 'SELECT * FROM accounts WHERE (username = ' + `"` + req.body.data.username + `"` + ' AND ' + "password" +` = "` + req.body.data.password + `"` + ')'; 

        db.query(queryString, function (err, result, field) {

            if (err) throw err;
            single_account = result;
            console.log(req.body.data.username, " -loginV2")
            res.send(single_account)

        })  
        
    })

module.exports = router;