const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const getUsers = async (req, res) => {
try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    console.log("connected");

    const db = client.db("SportsPickApp");
    const users = await db.collection("users").find().toArray();

    client.close();
    console.log("disconnected");

    res.status(200).json({
        status: 200,
        users,
    });
} catch (err) {
    console.log("Error:", err);
}
};

module.exports = { getUsers }