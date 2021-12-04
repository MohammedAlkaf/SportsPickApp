const path = require("path");
const express = require("express");
const { getUsers } = require('./handlers/users-handlers/getUsers')
const { getUserById} = require('./handlers/users-handlers/getUserById')

const PORT = 8000;

express()

.use(express.json())

.get("/", (req,res) => {
    res.status(200).json({ status: 200, message: "sucess"})
})

.get("/users", getUsers)
.get("/users/:handle", getUserById)

.listen(PORT, function () {
    console.info("🌍 Listening on port " + PORT);
});
