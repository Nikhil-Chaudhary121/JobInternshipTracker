import User from "../models/user.model.js";
import jwt from 'jsonwebtoken' 

const protectRoute = async(req ,res , next) => {
    try {
        const { token} = req.body;
        console.log("hii");
        
        if(!token){
            return res.status(401).json({ message: "You are not logged in" });
        }
        const decode = jwt.verify(token , process.env.JWT_SECRET)
        
        const user = await User.findById(decode.userId).select("-password")
        req.user = user;
        next()
    } catch (error) {
        console.log("Error in protectRoute :" , error.message)
        res.status(401).json({ message: "You are not logged in" });
    }
}

export default protectRoute