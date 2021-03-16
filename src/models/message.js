
const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    subject: {
        type: String,
        required: true,
        trim: true
    },
    companyName: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    },
}, {
    timestamps: true
});

messageSchema.methods.toJSON = function (){
    const messageObject = this.toObject();

    return messageObject;
};

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
