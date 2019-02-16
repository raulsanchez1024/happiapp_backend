const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    companyname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    employees: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Employee' 
    }]
});

module.exports = User = mongoose.model("users", UserSchema);