// *******************************************************************************************
//This handler is to manage joining and withdrawing from an activity
// If the user has not joined the activity yet, the handler will allow the user to join
// If the user has already joined the activity, the handler will allow the useer to withdraw
// *******************************************************************************************
const { v4: uuidv4 } = require("uuid");
const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const putjoinByUserId = async (req, res) => {
    try {
    // Current user _id, will used to let the user join or withdraw from an activity
    // The post _id will determine what activity the current user is targeting
    const { currentUser, postData } = req.body;

    // Find the post with post _id and find current user _id in the 'joining' array
    const query = { _id: postData._id, "joining._id": currentUser._id };

    // Connect to Mongo DB
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    console.log("connected");

    // Connect to the database
    const db = client.db("SportsPickApp");

    // Find the post with the provided query
    const post = db.collection("posts").findOne(query, async (err, result) => {
        // If a result is found, it means the user has already joined and 
        // therefore the endpoint will handle withdrawing from the activity
        if (result) {
            // create a notfication to add to the post creator profile when current user join their activity
            const date = new Date;
            const notification = { 
                _id: uuidv4(),
                date: date.toISOString(),
                type:'withdraw',
                user:{
                    _id:currentUser._id,
                    imgSrc:currentUser.imgSrc,
                    displayName: currentUser.displayName
                },
                activity:{
                  _id: postData._id,
                  type:postData.activityType,
                  date:postData.activityDate
                },
                message:'withdrew from your activity',
            }
            // Query to find the targetted post activity
            const postQuery = { _id: postData._id };
            // The update to remove the current user from the activity
            const removeUserfromPost = { $pull: { joining: { _id: currentUser._id } } };
            // Find the post and remove the current user from the activity
            const resultPostUpdate = await db.collection("posts").updateOne(postQuery, removeUserfromPost);
            console.log('Post update: ', resultPostUpdate);

            // Query to find a user and remove the joined activity from the profile
            const userQuery = { _id: currentUser._id };
            // The update to remove the activity _id from the user profile
            const removeActivityFromUser = { $pull: { joinedActivities: { _id: postData._id} } };
            // Find the user with remove the post from the user profile
            const resultUserUpdate = await db.collection("users").updateOne(userQuery, removeActivityFromUser);
            console.log('User update: ',resultUserUpdate);
            // Also remove the user from current logged in user profile
            const resultCurrentUSerUpdate = await db.collection("currentUser").updateOne(userQuery,removeActivityFromUser);
            console.log('CurrentUser update: ', resultCurrentUSerUpdate);

            // Now send notifications to the activity creator to let her/him know that the current user joined her/his activity
            const postCreatorQuery = {_id: postData.creator_id };
            const updateNotifications = { $addToSet: { notifications: { ... notification }} };
            const resultUpdateNotifiations = await db.collection("users").updateOne(postCreatorQuery, updateNotifications); 
            console.log('Notification update: ', resultUpdateNotifiations);

            client.close();
            console.log("disconnected");

            return res.status(200).json({status:200, message:'user has withdrawn from the activity'})
        }

        // If no result is found, it means the user has not joined the activity and 
        // therefore the end point will handle joining
        else {
            // create a notfication to add to the post creator profile when current user join their activity
            const date = new Date;
            const notification = { 
                _id: uuidv4(),
                date: date.toISOString(),
                type:'join',
                user:{
                    _id:currentUser._id,
                    imgSrc:currentUser.imgSrc,
                    displayName: currentUser.displayName
                },
                activity:{
                  _id: postData._id,
                  type:postData.activityType,
                  date:postData.activityDate
                },
                message:'joined from your activity',
            }
            
            // Query to find the targetted post activity
            const postQuery = { _id: postData._id };
            // The update to add the current user from the activity
            const addUserToPost = { $push: { joining: { _id: currentUser._id } } }
            // Find the post and add the current user To the activity
            const resultPostUpdate = await db.collection('posts').updateOne(postQuery,addUserToPost);
            console.log('Post update: ',resultPostUpdate);

            // Query to find a user and remove the joined activity from the profile
            const userQuery = { _id: currentUser._id };
            // The update to remove the activity _id from the user profile
            const addPostToUser = { $push: { joinedActivities: { _id: postData._id} } };
            // Find the user with remove the post from the user profile
            const resultUserUpdate = await db.collection("users").updateOne(userQuery,addPostToUser);
            console.log('User update: ',resultUserUpdate);

            // Also remove the user from current logged in user profile
            const resultCurrentUSerUpdate = await db.collection("currentUser").updateOne(userQuery,addPostToUser);
            console.log('CurrentUser update: ', resultCurrentUSerUpdate);

            // Now send notifications to the activity creator to let her/him know that the current user joined her/his activity
            const postCreatorQuery = {_id: postData.creator_id };
            const updateNotifications = { $addToSet: { notifications: { ... notification }} };
            const resultUpdateNotifiations = await db.collection("users").updateOne(postCreatorQuery, updateNotifications); 
            console.log('Notification update: ', resultUpdateNotifiations);


            client.close();
            console.log("disconnected");

            return res.status(200).json({status:200, message:'user has joined the activity'})

        }
    });
  } catch (err) {
    client.close();
    console.log("disconnected");
    console.log("Error: ", err);
  }
};

module.exports = { putjoinByUserId };
