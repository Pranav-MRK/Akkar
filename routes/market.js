const express = require("express");
const router = express.Router();
const Market = require("../Model/listmarket"); // Importing the model we fixed earlier

// Index Route - Show all items
router.get("/", async (req, res) => {
    try {
        const allItems = await Market.find({});
        res.render("market/index", { allItems }); 
        
    } catch (error) {
        res.send("Something went wrong: " + error);
        
    }
});

// Show Route - Show single item
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const market = await Market.findById(id);
        if (!market) {
            return res.status(404).send("Market item not found");
        }
        res.render("market/show", { market });
    } catch (error) {
        res.status(400).send("Invalid market id");
    }
});

router.get("/:id/edit",async(req,res)=>{
    try{
        const {id} = req.params;
        const market = await Market.findById(id);
        if (!market) {
            return res.status(404).send("Market not available to edit");
        }
        res.render("market/edit",{market});
    }catch(error){
        res.status(400).send("Invalid market id");
    }
})
//  update

router.put("/:id",async(req,res)=>{
    
    let {id} = req.params;
    await Market.findByIdAndUpdate(id, { ...req.body.market});
    res.redirect(`/marketplace/${id}`);
   
});
router.delete("/:id",async(req,res)=>{
    
    let {id} = req.params;
    await Market.findByIdAndDelete(id);
    res.redirect("/marketplace");
   
});
module.exports = router;