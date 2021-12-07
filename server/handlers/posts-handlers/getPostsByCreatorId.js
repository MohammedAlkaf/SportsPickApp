const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const getPostsByCreatorId = async (req, res) => {
try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    console.log("connected");

    const { _id } = req.params;

    const query = { 'creator._id':_id };

    const db = client.db("SportsPickApp");
    const posts = await db.collection("posts").find(query).toArray();

    client.close();
    console.log("disconnected");

    res.status(200).json({
        status: 200,
        posts,
    });
} catch (err) {
    console.log("Error:", err);
}
};

module.exports = { getPostsByCreatorId }