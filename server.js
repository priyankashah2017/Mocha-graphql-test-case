

const express = require('express');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
const app = express();
const port = 3300;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var Users = [{
     id: "2",
     password: "Admin"
},
{
     id: "3",
     password: "Admin"
}];

app.get('/message', function (req, res) {
     res.send('This is the message');
});

app.post('/login', function (req, res) {
     console.log("Login --")
     if (!req.body.id || !req.body.password) {
          res.send('login', { message: "Please enter both id and password" });
     } else {
          Users.filter(function (user) {
               if (user.id === req.body.id && user.password === req.body.password) {
                    var token = jwt.sign({ id: req.body.id, password: req.body.password }, 'App');
                    return res.send({ code: 200, token: token, message: "Login Successfully!" });
               }
               // else {
               //      console.log("No User Found !!")
               //      res.send('login', { message: "Invalid credentials !" });
               // }
          });
     }
});


app.get('/media', function (req, res) {
     console.log("Media api !!")
     var response = {
          podcasts: [{
               "description": "some text",
               "id": 574,
               "title": "Why long-term value is a winning bet",
               "media": "podcast",
               "publishedDate": "2018-12-19T18:00:00.000Z",
               "isLive": true,
               "isDeleted": false,
               "link": "https://podcasts.com/574",
               "createdAt": "2018-12-20T06:30:00.618Z",
               "updatedAt": "2019-01-31T06:30:00.864Z"
          }],
          total: 1
     }
     if (response.podcasts.length > 0) {
          res.send(response);
     } else {
          var errorObj = {
               httpCode: 404,
               message: 'NOT_FOUND',
               description: 'The resource referenced by request does not exists.',
               details: 'Podcast is not available'
          }
          res.status(404);
          res.send(errorObj)
     }
});
app.listen(port, function () {
     console.log("\nServer is running on port " + port);
});
module.exports = app; // for testing




