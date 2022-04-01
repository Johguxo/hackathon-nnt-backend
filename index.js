const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const authRoute = require('./routes/auth')
const profileRoute = require('./routes/profile')
const accountRoute = require('./routes/account')

require('dotenv').config()

app.get('/', (req, res) =>  res.send("Welcome to apis Hackathon NNTData"))

//Connect to MongoDB
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_DB)
    .then(()=> console.log("DB Connection successfully!"))
    .catch((err)=> console.log(err))
}

//Middleware
app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoute);
app.use("/api/profile", profileRoute);
app.use("/api/account", accountRoute);


//Listening
app.listen(process.env.PORT, ()=> {
    console.log(`Listening in port ${process.env.PORT}!`);
})