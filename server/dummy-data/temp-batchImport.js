const { users, posts } = require('./app-initial-data');
const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;
console.log(MONGO_URI);

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const batchImport = async () => {
    try{
        const client = new MongoClient(MONGO_URI, options);
        await client.connect();
        console.log('connected');
    
        const db = client.db('SportsPickApp');
        await db.collection("users").insertMany (users);
        await db.collection("posts").insertMany (posts);

    
        client.close();
        console.log('disconnected');
    }
    catch(err){
        console.log("ERROR OCCURED: ", err);
    }

}

batchImport();