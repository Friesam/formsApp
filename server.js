// server.js
    const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./config/DB');
    var expressJwt = require('express-jwt');

    const app = express();

    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );
    const addContactRoutes = require('./routes/addContact.route');

    // use JWT auth to secure the api, the token can be passed in the authorization header or querystring
    app.use(expressJwt({
      secret: config.secret,
      getToken: function (req) {
          if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
              return req.headers.authorization.split(' ')[1];
          } else if (req.query && req.query.token) {
              return req.query.token;
          }
          return null;
      }
    }).unless({ path: ['/users/authenticate', '/users/register'] }));

    // routes
    app.use('/users', require('./controllers/users.controller'));
    
    app.use(bodyParser.json());
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    const port = process.env.PORT || 4000;

    app.use('/addContact', addContactRoutes);

    const server = app.listen(port, function(){
     console.log('Listening on port ' + port);
    });
