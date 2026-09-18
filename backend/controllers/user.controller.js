import User from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import jwtGenerate from "../utils/jwtGenerate.js"

const register = async (req , res) => {
    try {
        const {name , username , email , password } = req.body
        
        const user =await User.findOne({username : username})
        if(user){
            return res.status(400).json({error : "user already exists"})
            console.log("this code should not run");   
        }
         const salt = await bcrypt.genSalt(10)
         const hashedPassword = await bcrypt.hash(password , salt)
        const newUser = new User({
            name,
            username,
            email,
            password : hashedPassword
        })
        if(newUser) {
            const token = await jwtGenerate(newUser._id , res);
            await newUser.save();
            res.status(200).json({token , user:{name , user, email , id : newUser._id} , id : newUser._id})
        }else{
            res.status(400).json({error : "Invalid User Data"})
        }
    } catch (error) {
       console.log("Error in RegisterUser : ", error.message ) 
       res.status(500).json({error : "Server Error"})
    }
}
const login = async (req , res) => {
    try {
        let {username , password} = req.body

        if (!username || !password) {
            console.log("Error in Login ")
            return res.status(400).json({error : "Username or Password is Missing"})
        }

        const user  = await User.findOne({username})

        if(!user){ return res.status(401).json({error : "User dose not exists"})}
        
        const isMatch = await bcrypt.compare(password , user.password)
        console.log(isMatch)
        if(!isMatch){
            return res.status(400).json({error : "password does not match"})
        }
        
        const token = await jwtGenerate(user._id , res)
        
        res.status(200).json({ token , user : {...user} , id : user._id})
        
    } catch (error) {
        console.log("Error in LoginUser : ", error.message ) 
       res.status(500).json({error : "Server Error"})
    }
}
const logout = async (req , res) => {
    res.cookie("jwt" , "")
    res.status(200).json({message: "user Logged out"})

}

export {register , login , logout}