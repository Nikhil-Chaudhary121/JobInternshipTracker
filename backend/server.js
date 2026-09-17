import express from 'express'
import dotenv from "dotenv"
import cors from 'cors'


import connectDB from './db/connctDB.js'

import itemTestdb from './testDB/item.testdb.js'
import userTest from './testDB/user.testdb.js'

dotenv.config()
connectDB()

import userRoute from './routes/user.route.js'
import itemRoute from './routes/item.route.js'


const PORT = 5000;

const app = express()

app.use(cors())
app.use(express.json())

// itemTestdb()
// userTest()


app.use('/user' , userRoute)
app.use('/item' , itemRoute)


app.listen(PORT,()=>{
    console.log("server is running on PORT" , PORT);
    
})