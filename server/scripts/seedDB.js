const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const schema = new Schema({
    email: {type: String, unique: true},
    password: {type: String},
    passwordConfirm: {type: String}
});

schema.set('toJSON', { virtuals: true });

const User = mongoose.model('myuser', schema);
module.exports = User;
