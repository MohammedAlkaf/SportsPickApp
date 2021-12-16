const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// *************************************************************************
// This handler function is used to handle adding a new user to the database
// It's endpint is called when a new user signs up from the sign-up page
// *************************************************************************

const addNewUser = async (req, res) => {
    try {
        // Destructing the user inputs for validations
        const { 
            displayName,
            email,
            DOB,
            location,
            password,
            confirmPassword
        } = req.body;

        // Write the date in ISO format YYYY-MM-DDTHH:mm:ss.sssZ
        const d = new Date();
        let todayDate = d.toISOString();

        // add the new data user data with all other initial values for a new user
        const newUserInfo = 
        { ...req.body,
            _id: uuidv4(), // create a new _id for the new user
            followers:[], // followers are saved in an array of follower users _ids. Example: [{ _id: <follower1_id> }, { _id: <follower2_id> }, ... ]
            following:[], // similar to followers array, following users are saved in an array of following users _ids
            joined: todayDate,
            postedActivities: [], // posed activities will be saved in an array with each post _id. Example: [{ _id: <post1_id> }, { _id: <post2_id> }, ... ]
            joinedActivities: [],  // similar to postedActivities array.
            notifications:[] // notifications details contains the user, activity,  notification type, and notification message
        }

        // Validate the users inputs
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

        // if all inputs pass the validation, then allow the user to create the new account
        return res.status(200).json({ status: 200, data: newUserInfo, message: "User info has been added"})

    } catch (err) {
        console.log("Error:", err);
    }
};

module.exports = { addNewUser }