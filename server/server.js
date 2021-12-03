const path = require("path");
const express = require("express");

const PORT = 8000;

express()

.use(express.json())

.get("/", (req,res) => {
    res.status(200).json({ status: 200, message: "sucess"})
})
.listen(PORT, function () {
    console.info("🌍 Listening on port " + PORT);
});
