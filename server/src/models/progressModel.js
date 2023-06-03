const mongoose = require('mongoose');

const ProgressSchema = new mongoose.Schema({
    text:{
        type: String,
    },
    completed:{
        type: Boolean,
    }
})

const ProgressModel = mongoose.model('Progress', ProgressSchema);
module.exports = ProgressModel;