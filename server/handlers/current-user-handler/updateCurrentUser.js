const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const updateCurrentUser = async (req, res) => {

    const { email } = req.params;
    const query = { email };
try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    console.log("connected");

    const db = client.db("SportsPickApp");
    const user = db.collection("users").findOne(query, async (err, result) => {

        if(result){
            await db.collection("currentUser").insertOne({currentUser: result});
            client.close();
            console.log("disconnected");
            return res.status(200).json({status:200, result, message:"User logged in successfully"})
        }
        else {
            client.close();
            console.log("disconnected");
            return res.status(404).json({status: 404, message: "There is no account associated with this email address"})
        }
        });

} catch (err) {
    console.log("Error:", err);
}
};

module.exports = { updateCurrentUser }