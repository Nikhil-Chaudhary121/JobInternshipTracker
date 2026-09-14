import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema({
    company : {
        type : String , 
        required : true
    },
    role : {
        type : String , 
        required : true
    },
    status : {
        type : String , 
        enum : ["applied" , "interview" , "offer" , "rejected"],
        default : "applied"
    },
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User", 
        required : true
    }

} , {timestamps : true})

const Item = mongoose.model("Item" , itemSchema);

export default Item