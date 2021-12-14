const path = require("path");
const express = require("express");
const { getUsers } = require('./handlers/users-handlers/getUsers');
const { getUserById} = require('./handlers/users-handlers/getUserById');
const { addNewUser } = require('./handlers/users-handlers/addNewUser');
const { updateCurrentUser } = require('./handlers/current-user-handler/updateCurrentUser');
const { deleteCurrentUser } = require('./handlers/current-user-handler/deleteCurrentUser');
const { getPosts } = require('./handlers/posts-handlers/getPostsHandler');
const { getPostsByCreatorId } = require('./handlers/posts-handlers/getPostsByCreatorId');
const { getPostsByJoinerId } = require('./handlers/posts-handlers/getPostsByJoinerId');
const { postNewActivityPost } = require('./handlers/posts-handlers/postNewActivityPost');
const { deletePostById } = require('./handlers/posts-handlers/deletePostByPostId');
const { getPostById } = require('./handlers/posts-handlers/getPostByPostId');
const { putjoinByUserId } = require('./handlers/posts-handlers/putJoinActivity');
const { updateFollowingUsers} = require('./handlers/current-user-handler/followUsers');

const cors = require("cors");

const PORT = 8000;

const app = express();

app.use(cors());

app.use(express.json());

// Get all users
app.get("/users", getUsers);
// Get a single user by unique _id number
app.get("/users/:_id", getUserById);
// When a user signs up with a new account, post the new user info 
app.post("/users/add", addNewUser);
// Store user info in 'current user collection' when a user sigs in or sings up
app.get("/loggedin/:email", updateCurrentUser);
// When a user signs out, clear the data from 'currentUser' collection
app.delete("/loggedout/:email", deleteCurrentUser);
// Update the following array for the current user and the followers arrays for the user that's being followed
app.put("/users/follow", updateFollowingUsers);

// Get all posts in the database
app.get('/posts', getPosts);
// Get all posts by creator _id
app.get('/posts/creator/:_id', getPostsByCreatorId);
// Get allposts a user is joining
app.get('/posts/joiner/:_id', getPostsByJoinerId );
// Post a new activity 
app.post('/posts/add', postNewActivityPost);
// Delete an existing post
app.delete('/posts/delete/:_id',deletePostById);
// Get post by it's unique _id
app.get('/posts/:_id', getPostById );

// Handle current user joining or withdrawing from an activity
app.put('/post/updateJoining', putjoinByUserId)

var server = app.listen(PORT, function () {
    console.info("🌍 Listening on port " + PORT);
});
