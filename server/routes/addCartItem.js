const mysql = require("mysql");
const express = require("express");
const router = express.Router();
const db = require('./AWS_CONNECTION');

console.log("add cart init")

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
        //let queryString = 'SELECT * FROM accounts WHERE (username = ' + `"` + req.body.data.username + `"` + ' AND ' + "password" +` = "` + req.body.data.password + `"` + ')'; 
        console.log(req.body.data.username, "-req body username")
        // let queryString = "SELECT * FROM accounts where username = " + `"` + req.body.data.username + `"`; 
        let queryString = "update accounts set cart = " + `'` + req.body.data.cart + `'` + " where username = " + `"` + req.body.data.username + `"`;
        //let queryString2 = "update accounts set currently_active = true where currently_active = 0"

        console.log(queryString)
        db.query(queryString, function (err, result, field) {

            res.send;
    
        })  
        
    })

module.exports = router;