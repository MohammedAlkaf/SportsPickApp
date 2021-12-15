const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const addNewUser = async (req, res) => {
    try {

        const { 
            displayName,
            email,
            DOB,
            location,
            password,
            confirmPassword
        } = req.body;


        const d = new Date();
        let todayDate = d.toISOString();

        const newUserInfo = 
        { ...req.body,
            _id: uuidv4(),
            followers:[],
            following:[],
            joined: todayDate,
            postedActivities: [],
            joinedActivities: [],
            notifications:[]
        }

        if( password === "" ){
            return res.status(400).json({ status: 400, data:newUserInfo,  message: "Your password is missing"})
        }
        else if( password !== confirmPassword ){
            return res.status(400).json({ status: 400, data:newUserInfo,  message: "Passwords don't match"})
        }
        else if( displayName === ""){
            return res.status(400).json({ status: 400, data:newUserInfo,  message: "Your full name is missing"})
        }
        else if ( email === ""){
            return res.status(400).json({ status: 400,data:newUserInfo, message: "Your email is missing"})
        }
        else if ( DOB === ""){
            return res.status(400).json({ status: 400,data:newUserInfo, message: "Your date of birth is missing"})
        }
        else if ( location === ""){
            return res.status(400).json({ status: 400,data:newUserInfo, message: "Your city is missing"})
        }


        const client = new MongoClient(MONGO_URI, options);
        await client.connect();
        console.log("connected");

        const db = client.db("SportsPickApp");
        await db.collection("users").insertOne(newUserInfo);

        client.close();
        console.log("disconnected");

        return res.status(200).json({ status: 200, data: newUserInfo, message: "User info has been added"})

    } catch (err) {
        console.log("Error:", err);
    }
};

module.exports = { addNewUser }