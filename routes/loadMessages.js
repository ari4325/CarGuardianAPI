import Message from "../schema/MessageSchema.js";

const loadMessage = async(req, res) => {
   var arr = Message.find({recipient_id: req.query.id});
   console.log(arr);
  
  res.json(
    {
      error: false,
      message: "Fetch successful",
      msg: arr
    });
  
}

export default loadMessage;
