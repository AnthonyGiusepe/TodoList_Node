const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    Completed: {
        type: Boolean,
        default: false
    },
    CreatedAt: {
        type: String,
        default: Date.now
    } 
})

module.exports = mongoose.model('Todo', todoSchema)