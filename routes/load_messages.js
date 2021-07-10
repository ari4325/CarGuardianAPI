import Message from "../schema/MessageSchema.js";

var arr = [];

const sendmessage = async(req, res) => {
   var cursor = Message.find({recipient_id: req.query.id});

  cursor.each(function(err, item) {
      // If the item is null then the cursor is exhausted/empty and closed
      if(item!=null){
        arr.push(item);
      }
      // otherwise, do something with the item
  });
  
  res.json(
    {
      error: false,
      message: "Fetch successful",
      msg: arr
    });
  
}
