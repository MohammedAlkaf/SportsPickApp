const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const getUserById = async (req, res) => {

    const { handle } = req.params;
    const query = { handle };
try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    console.log("connected");

    const db = client.db("SportsPickApp");
    const user = db.collection("users").findOne(query, (err, result) => {
        client.close();
        console.log("disconnected");
        result
            ? res.status(200).json({ status: 200, user: result })
            : res.status(404).json({
                status: 404,
                message: `user info at ${handle} not found`,
            });
        });

} catch (err) {
    console.log("Error:", err);
}
};

module.exports = { getUserById }