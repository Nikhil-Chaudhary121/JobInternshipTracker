import mongoose from "mongoose"
import User from '../models/user.model.js'

async function userTest() {
  try {
        await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected');
    const user = await User.create({
      name : "Nikhil Chaudhary",
      username : "nikhil",
      email : "nikhil@gmail.com" , 
      password : "1234"
    });

    console.log('Created:', user);
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    mongoose.connection.close();
  }
}

export default userTest