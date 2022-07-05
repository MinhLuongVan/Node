const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const Login = new Schema({
  username: {type: String},
  password: {type: String ,min: 8},
  createAt: {type: Date , defailt: Date.now},
  updateAt: {type: Date , defailt: Date.now},
});

module.exports = mongoose.model('Login',Login,'list-user');