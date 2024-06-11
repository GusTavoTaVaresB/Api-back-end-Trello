const mongoose = require('mongoose');

const ChecklistSchema = new mongoose.Schema({
    title: {
        type: String,
        required: false,
        index: true,
        nullok: false
    },

    task: {
        type: String,
        required: true,
        nullok: false
    }
});

const Checklist = mongoose.model('checklist', ChecklistSchema);

module.exports = Checklist;