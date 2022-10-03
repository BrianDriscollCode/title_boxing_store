const vonageSDK = require('@vonage/server-sdk');
const express = require("express");
const router = express.Router();

//Instantiate
const vonage = new vonageSDK({
    apiKey: "a0e54f3c",
    apiSecret: "48gWkWuCxaXS3L03"
});

let mainID;

//Make verification request

router.route('/request')
  .post((req, res) => {
    vonage.verify.request({
        number: req.body.data.number,
        brand: "Boxing_application"
      }, (err, result) => {
        if (err) {
          console.error(err);
        } else {
          const verifyRequestId = result.request_id;
          mainID = result.request_id;
          console.log('request_id', verifyRequestId);
          res.send(verifyRequestId);
        }
    });

    
  })


router.route('/check')
  .post((req, res) => {

    vonage.verify.check({
      request_id: mainID,
      code: req.body.data.code //insert code
    }, (err, result) => {
      if (err) {
        console.error(err);
      } else {
        console.log(result, "this is result");
        res.send(result)
      }
    });

  })

module.exports = router;
