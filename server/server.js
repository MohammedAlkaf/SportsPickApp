const path = require("path");
const express = require("express");
const { getUsers } = require('./handlers/users-handlers/getUsers')
const { getUserById} = require('./handlers/users-handlers/getUserById')
const { addNewUser } = require('./handlers/users-handlers/addNewUser')
const { updateCurrentUser } = require('./handlers/current-user-handler/updateCurrentUser')
const cors = require("cors");

const PORT = 8000;

express()
.use(cors())

.use(express.json())

.get("/users", getUsers)
.get("/users/:handle", getUserById)
.post("/users/add", addNewUser)
.get("/loggedin/:email", updateCurrentUser)


.listen(PORT, function () {
    console.info("🌍 Listening on port " + PORT);
});
