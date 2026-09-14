import mongoose from "mongoose";
import Item from '../models/item.model.js'


async function itemTestDB() {
  try {
        await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected');
    const user = await Item.create({
      company : "Google" , 
      role : "Mern Intern",
      user : '6aa783a7f955252cfdff3630'
    });

    console.log('Created:', user);
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    mongoose.connection.close();
  }
}

export default itemTestDB