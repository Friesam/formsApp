const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for AddContact
let AddContact = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  gender: {
    type: String
  },
  message: {
    type: String
  }
},{
    collection: 'addContactsForms'
});

module.exports = mongoose.model('AddContact', AddContact);