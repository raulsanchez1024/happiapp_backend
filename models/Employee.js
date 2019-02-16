const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    users: {
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    },
    questions: [{
        type: Schema.Types.ObjectId, 
        ref: 'Question' 
    }],
    surveys: [{
        type: Schema.Types.ObjectId, 
        ref: 'Survey' 
    }]
});

module.exports = Employee = mongoose.model("employees", EmployeeSchema);