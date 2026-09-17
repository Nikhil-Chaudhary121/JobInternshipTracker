import mongoose from "mongoose";
import Item from "../models/item.model.js";
import User from "../models/user.model.js";


const getAllItem = async(req , res ) => {
    try {
        const {userId} = req.body;
        const isValid = mongoose.isValidObjectId(userId)
        if(!isValid){
            return res.status(400).json({error : "user id not valid"})
        }
        const user = await User.findById(userId)
        // res.send(user)
        if(!user) {
            return res.status(401).json({error : "User does not exist"})
        }
        const items = await Item.find({user : userId})
        res.status(200).json(items)
    } catch (error) {
       console.log("Error in Get All Item :" , error.message) 
       res.status(500).json({error : "Server Error"})
    }
}
const getItem = async(req , res ) => {
   try {
    const itemId = req.params.id;
    const isValid = mongoose.isValidObjectId(itemId)
        if(!isValid){
            return res.status(400).json({error : "user id not valid"})
        }
    const item = await Item.findById(itemId)
    if(!item){
        return res.status(400).json({error : "Item dose not exist"})
    }
    res.status(200).json(item)

   } catch (error) {
    console.log("Error in Get Item Details: ", error.message)
    res.status(500).json({error : "Server error"})
   }
}
const createItem = async(req , res ) => {
    try {
        
        const {company , role , user : userId , status   } = req.body 
        console.log(company , role, userId);
        

        const isValid = mongoose.isValidObjectId(userId)
        if(!isValid){
            return res.status(400).json({error : "user id not valid"})
        }

        const user =await User.findById(userId)
        if(!user){
            res.status(400).json({error: "User does not exist"})
        }
            
        if(!company || !role || !userId){          
            return res.status(400).json({error : "something is missing"})
        }
        const newItem = new Item({
            status ,
            company ,
            role,
            user: userId
        })  
        if(newItem){
            newItem.save()
            res.status(200).json(newItem)
        }
        res.status(400).json({error : "Error in Creating new Item"})
    } catch (error) {
      console.log("Error in creating Post :" , error.message); 
      res.status(500).json({error : "Server Error"})
    }
}
const updateItem = async(req , res ) => {
    try {
        const {status , itemId} = req.body;
        const isValid = mongoose.isValidObjectId(itemId)
        const validStatuses = ["applied", "interview", "rejected", "offer"];

        if(!isValid){
            return res.status(400).json({error : "item id not valid"})
        }
        const item = await Item.findById(itemId)
        if(!item){
            return res.status(400).json({error : "Item Does not Exist"})
        }

        if (!status || !validStatuses.includes(status)) {
            return res.status(400).json({ error: "status is not valid or empty" });
        }
        item.status = status;
        await item.save()
        return res.status(200).json(item)

    } catch (error) {
      console.log("Error in creating Post :" , error.message); 
      res.status(500).json({error : "Server Error"})
    }
}
const deleteItem = async(req , res ) => {
    try {
        const {userId , itemId} = req.body;
        const isValidItemId = mongoose.isValidObjectId(itemId)
        const isValidUserId = mongoose.isValidObjectId(userId)

        if(!isValidItemId || !isValidUserId){
            return res.status(400).json({message : "Id is invalid or missing"})
        }
        const user = await User.findById(userId)
        const item = await Item.findById(itemId)

        if(!user || !item){
            return res.status(400).json({message : "item or user id not exist"})
        }
        let itemUser = item.user.toString()
        if(itemUser != userId){
            return res.status(400).json({message : "You are not the owner of this item"})
        }
        await Item.findByIdAndDelete(itemId)
        res.status(200).json({message : "Item Deleted"})
    } catch (error) {
      console.log("Error in creating Post :" , error.message); 
      res.status(500).json({error : "Server Error"})
    }
}

export { getAllItem , getItem , createItem , updateItem, deleteItem}