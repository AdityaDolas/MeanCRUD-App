var mongoose = require('mongoose');

var countrySchema = mongoose.Schema({
    name:{type: String}
});

module.exports = mongoose.model('country', countrySchema);