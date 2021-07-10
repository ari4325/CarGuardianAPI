import User from "../schema/UserSchema.js";

const userInfo = async(req, res) => {
    const id = req.query.id;
    console.log(id)
    const reqUser = await User.findOne({ _id: id})

    if(!reqUser){   
        res.status(200).json({
            error: true,
            message: "User not found"
        })
    }else{
        res.status(200).json({
            error: false,
            message: "User found",
            user: reqUser
        })
    }
} 


export default userInfo;
