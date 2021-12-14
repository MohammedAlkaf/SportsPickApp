const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const getPosts = async (req, res) => {
try {

    const { activityType, level } = req.query;

    let query = {};

    if( activityType === "All" && level === "All" ){
        query = {};
    }
    else if( activityType && level === "All" ){
        query = { activityType };
    }
    else if ( activityType === "All" && level ){
        query = { level };
    }
    else if( activityType && level ){
        query = { activityType, level };
    }

    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    console.log("connected");

    const db = client.db("SportsPickApp");
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

module.exports = { getPosts }