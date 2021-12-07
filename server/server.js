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

const cors = require("cors");

const PORT = 8000;

express()
.use(cors())

.use(express.json())

// Get all users
.get("/users", getUsers)
// Get a single user by unique _id number
.get("/users/:_id", getUserById)
// When a user signs up with a new account, post the new user info 
.post("/users/add", addNewUser)
// Store user info in 'current user collection' when a user sigs in or sings up
.get("/loggedin/:email", updateCurrentUser)
// When a user signs out, clear the data from 'currentUser' collection
.delete("/loggedout/:email", deleteCurrentUser)

// Get all posts in the database
.get('/posts', getPosts)
// Get all posts by creator _id
.get('/posts/:_id', getPostsByCreatorId)
// Get allposts a user is joining
.get('/posts/joiner/:_id', getPostsByJoinerId )
// Post a new activity 
.post('/posts/add', postNewActivityPost)
// Delete an existing post
.delete('/posts/delete/:_id',deletePostById)

.listen(PORT, function () {
    console.info("🌍 Listening on port " + PORT);
});
