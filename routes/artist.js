const express = require("express");
const router = express.Router();
const Artist = require("../Model/listings");

// 1. INDEX ROUTE - Show all artists
router.get("/", async (req, res) => {
    try {
        const allArtists = await Artist.find({});
        res.render("listing/index.ejs", { allArtists });
    } catch (err) {
        res.status(500).send("Internal Server Error");
    }
});

// 2. EDIT ROUTE - Render the edit form
router.get("/:id/edit", async (req, res) => {
    try {
        let { id } = req.params;
        const artist = await Artist.findById(id);
        if (!artist) {
            return res.status(404).send("Artist not available to edit");
        }
        res.render("listing/edit.ejs", { artist });
    } catch (err) {
        res.status(400).send("Invalid Artist ID");
    }
});

// 3. SHOW ROUTE - Show one specific artist
router.get("/:id", async (req, res) => {
    try {
        let { id } = req.params;
        const artist = await Artist.findById(id);
        if (!artist) {
            return res.status(404).send("Artist not found");
        }
        res.render("listing/show.ejs", { artist });
    } catch (err) {
        res.status(400).send("Invalid Artist ID");
    }
});

// 4. UPDATE ROUTE - Handle the PUT request from Edit Page
router.put("/:id", async (req, res) => {
    let { id } = req.params;
    // We use spread operator to update the artist object
    await Artist.findByIdAndUpdate(id, { ...req.body.artist });
    res.redirect(`/artist/${id}`); // Fixed: was 'es.redirect'
});

// 5. DELETE ROUTE - Remove from DB
router.delete("/:id", async (req, res) => {
    let { id } = req.params;
    await Artist.findByIdAndDelete(id);
    res.redirect("/artist");
});

module.exports = router;