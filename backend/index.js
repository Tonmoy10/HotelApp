const express = require('express')
const cors = require("cors")
const bcrypt = require("bcryptjs")
const webToken = require("jsonwebtoken")
const { default: mongoose } = require('mongoose')
const cookieParser = require("cookie-parser")
const UserModel = require('./models/user')
const app = express()
require('dotenv').config()

app.use(express.json())
app.use(cookieParser()) //to read cookies

const secretSalt = bcrypt.genSaltSync(8)  //FOR PASSWORD HASHING
const tokenSalt = 'jsdnfjdsnfnsoadnflsadn' //RANDOM STRING FOR TOKEN GENERATION

app.use(cors({
    credentials: true,
    origin:'http://localhost:5173',
    }
)) // TO AVOID CORS ERROR FOR MULTI ORIGIN

mongoose.connect(process.env.MongoURL) //CONNECTION TO DB


app.get('/test', (req, res) => {
    // res.json({user})
    res.json("hello")
})

app.post('/register', async (req, res) => {
    const {name, email, phone, pass, passConfirm} =req.body
    try {
        const user = await UserModel.create({
            name,
            email,
            phone,
            pass : bcrypt.hashSync(pass, secretSalt) // HASHING THE PASSWORD USING BCRYPT
        })
        res.json(user)
    } catch (error) {
        res.status(406).json(error)
    }
    
}) //CREATING A NEW USER USING USER MODEL

app.post('/login', async (req, res) => {
    const {email, pass} = req.body
    try {
    const user = await UserModel.findOne({email})
    if (user) {
        const checkPass = bcrypt.compareSync(pass, user.pass)
        console.log(checkPass)
        if (checkPass) {
            //webToken.sign({email: user.email, id: user._id, name: user.name},tokenSalt, {},(err, token) => {  //SET UP COOKIE
            webToken.sign({data: {email: user.email, id: user._id, name: user.name}},tokenSalt,{},(err,token) => { //SET UP COOKIE
                if(err) {
                    throw err
                }
                res.cookie('token',token).json(user)
                // res.json("ok")
            })
        }
        else {
            res.json("Incorrect Password")
        }
    }
    else {
        res.json("User not found")
    }
    } catch (error) {
        res.json(error)
    }
})

app.get('/user', (req,res) => {
    const {token} = req.cookies
    if(token) {
        webToken.verify(token, tokenSalt, {}, (err, data) => {
            if(err) {
                throw err
            } else {
                res.json(data)
            }
        })
    } else {
        res.json(null)
    }
    // res.json({token})
})

app.get('/account', (req, res) => {
    res.json("account page")
})

app.listen(4000)
