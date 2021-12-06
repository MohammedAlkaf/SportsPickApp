const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const deleteCurrentUser = async (req,res) => {
    const { email } = req.params;
    const query = { email };
    try {
        const client = new MongoClient(MONGO_URI, options);
        await client.connect();
        console.log("connected");

        const db = client.db("SportsPickApp");
        const result = await db.collection("currentUser").deleteOne(query);

        console.log(result);

        client.close();
        console.log("disconnected");

        return res.status(200).json({ status: 200, email, message: 'user logged out sucessfully'});

    } catch (err) {
        console.log("Error:", err);
    }
};

module.exports = { deleteCurrentUser };