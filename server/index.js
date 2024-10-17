const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
const PORT = 5000

app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017/internship-db")
.then(()=>{
    console.log("Mongoose is running");
}).catch(err=>{
    console.log(err);
})
const Schema = mongoose.Schema({
    email:{
        type:String,
        require:true
    }
})
const User = mongoose.model("user", Schema)
app.get("/",async (req, res)=>{
    const user = await User.find()
    res.json(user)
})
app.post('/user', async (req, res)=>{
    const {email} = req.body
    try{
        const newUser = new User({email})
        await newUser.save()
        const user = await User.find()
        res.json(user)
    }catch(err){
        console.log(err);
    }
})

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})
