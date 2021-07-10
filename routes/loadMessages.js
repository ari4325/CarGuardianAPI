import Message from "../schema/MessageSchema.js";

const loadMessage = async(req, res) => {
   var arr = [];
   Message.find({recipient_id: req.query.id}, function(err, users) {
    users.forEach(function(user) {
      arr.push(user);
    });

    res.json(
    {
      error: false,
      message: "Fetch successful",
      msg: arr
    });
  });
  
}

export default loadMessage;
