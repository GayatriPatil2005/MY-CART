const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json()) // coming data json format

mongoose.connect('mongodb://localhost:27017/MyDB')
.then(() => console.log('MongoDB connected successfully'))
.catch((err) =>console.log("Connection Error" , err))           // database connection


const prodSchema = new mongoose.Schema({
    name: String,
    price: Number,
    
})

const UserSchema = new mongoose.Schema({
    username: String,
    gender: String,
    dob : Number,

})

const ShopSchema = new mongoose.Schema({
    shopename : String,
    location : String,

    
})

const product = mongoose.model('product', prodSchema) // veriable craete orm

const User = mongoose.model('user', UserSchema) // veriable craete orm

const Shop = mongoose.model('shop', ShopSchema)


app.get('/', async (req , res) => {   
    res.send('Hello World!')          
})


app.get('/User', async (req , res) => {
    const user = await User.find()
    res.json(user)
})


app.get('/products', async (req , res) => {

    const temp = await product.find()  // all data fetch from database
    res.json(temp)
})


app.post('/products' , async (req, res) =>{
    const prod = new product(req.body)
    await prod.save()
    res.send('product added successfully')
})

app.get('/Shops', async (req , res) => {
    const shop = await Shop.find()
    res.json(shop)
})

app.post('/Shops', async (req , res) => {
    const shop = new Shop(req.body)
    await shop.save()
    res.send('shop added successfully')
})

app.put('/Shops/:id', async (req,res) => {    
    await Shop.findByIdAndUpdate(req.params.id , req.body)
    res.send('shop Updated!!');
})

app.listen(5000,() => {
    console.log('server is running on http://localhost:5000')
})

app.delete("/User/:id",async(req,res) =>
{
    await User.findByIdAndDelete(req.params.id)
    res.send("User Deleted")
})