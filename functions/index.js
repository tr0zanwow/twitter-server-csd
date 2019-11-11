// const express = require('express')
// const bodyParser = require('body-parser')

// const app=express();
// const Twit = require('twit')

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.post('/',function(req,res){
//     const id=req.body.id;
//     const statusText = req.body.statusText;
//     const access_token = req.body.access_token;
//     const access_token_secret = req.body.access_token_secret;
//     const client = new Twit({
//                 consumer_key:         'jC5tNNJX78KEsIG8EQRGF4KTd',
//                 consumer_secret:      'u4AE7ImFH0VZCTbdUWQqvIrYdEzcUFPwcxhFcyH0Wm8CCio1wW',
//                 access_token:          access_token,
//                 access_token_secret:   access_token_secret,
//                 timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
//                 strictSSL:            true,
//                 });
//                 const params = { status: statusText, in_reply_to_status_id: id }
//                 client.post('statuses/update',params, function(err, data, response) {
//                 res.send(data);
//                 res.end();
//                 });

//     });

// app.listen(3000,function() {
//     console.log("Started on PORT 3000");
// });
const functions = requir('firebase-functions')

exports.helloworld =functions.https.onRequest();