const express = require('express');
const app = express();
const addContactRoutes = express.Router();

// Require addContact model in our routes module
let AddContact = require('../models/addContact');

// Defined store route
addContactRoutes.route('/add').post(function (req, res) {
  let addContact = new AddContact(req.body);
  addContact.save()
    .then(addContact => {
    res.status(200).json({'addContact': 'addContact in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
addContactRoutes.route('/').get(function (req, res) {
    AddContact.find(function (err, addContacts){
    if(err){
      console.log(err);
    }
    else {
      res.json(addContacts);
    }
  });
});

// Defined edit route
addContactRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  AddContact.findById(id, function (err, addContact){
      res.json(addContact);
  });
});

//  Defined update route
addContactRoutes.route('/update/:id').post(function (req, res) {
    AddContact.findById(req.params.id, function(err, addContact) {
    if (!addContact)
      return next(new Error('Could not load Document'));
    else {
        addContact.name = req.body.name;
        addContact.email = req.body.email;
        addContact.gender = req.body.gender;
        addContact.message = req.body.message;

        addContact.save().then(adUnit => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
addContactRoutes.route('/delete/:id').get(function (req, res) {
    AddContact.findByIdAndRemove({_id: req.params.id}, function(err, addContact){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = addContactRoutes;