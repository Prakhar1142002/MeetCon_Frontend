const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const Usermodel = require('./models/User')

// access the variable thorugh process.env.<your_var>
require('dotenv').config();

//To Process Json Data
app.use(express.json());
app.use(cors());

//Connection to MongoDb Atlas Database
function dbConnect() {
    try {
        mongoose.connect(process.env.DB_ATLAS, {
            useNewUrlParser: true,
        });
        console.log("Connected to Database");
    } catch (err) {
        console.log(err);
    }
}

//Calling the function for connection
dbConnect();

app.get('/', (req, res) => {
    res.send("Working")
});
app.post('/ins', async (err,req, res, next) => {
    console.log("pOST METHOD");
    const firstname = req.body.ffName;
    const lname = req.body.llName;
    const email = req.body.eeMail;
    const pword = req.body.ppword;
    const age = req.body.aage;
    const gender = req.body.gender;
    
    const users = new Usermodel({
        fName: firstname,
        lname: lname,
        email: email,
        pword : pword,
        age : age,
        gender : gender,
    });
    try {
        await users.save();
        res.send("Inserted data");
        console.log("Inserted User data");
    } catch (err) {
        console.log(err);
    }
})


app.listen(process.env.DB_PORT, (req, res) => {
    console.log("listening on port " + process.env.DB_PORT);
});
