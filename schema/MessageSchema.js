import mongoose from "mongoose";

const Message = new mongoose.Schema({
    sender: {
    type: String,
    },
    recipient_id: {
    type: String,
    required: true,
    },
    msg: {
    type: String,
    required: true,
    },
    date_read: {
    type: Number,
    },
    date_sent: {
    type: Number,
    value: Date.now(),
    },
    msg_type: {
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    }
})

//const Message = mongoose.model("Message", Message);
export default mongoose.model("Message",Message);