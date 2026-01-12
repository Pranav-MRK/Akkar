const express = require("express");
const router = express.Router();
const Market = require("../Model/listmarket"); // Importing the model we fixed earlier

// Index Route - Show all items
router.get("/", async (req, res) => {
    try {
        const allItems = await Market.find({});
        res.render("market/index", { allItems }); 
        
    } catch (error) {
        res.send("Something went wrong: " + err);
        
    }
});

module.exports = router;