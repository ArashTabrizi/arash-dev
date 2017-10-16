var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
    text : String,
    state : Number
});
// //Added: 0 Checked:1,	Delay:2,	Canceled:3,