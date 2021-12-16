const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
// ************************************************************************
// This handler gets all the activity posts that a specific user has joined.
// The posts data is then displayed the that user profile
// ************************************************************************

const getPostsByJoinerId = async (req, res) => {
try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    console.log("connected");

    const { _id } = req.params;

    const query = { 'joining._id':_id };

    const db = client.db("SportsPickApp");
    // Go through all posts and find the posts that have the trageted user in 'joining' array
    const posts = await db.collection("posts").find(query).toArray();

    client.close();
    console.log("disconnected");

    res.status(200).json({
        status: 200,
        posts,
    });
} catch (err) {
    client.close();
    console.log("disconnected");
    console.log("Error:", err);
}
};

module.exports = { getPostsByJoinerId }