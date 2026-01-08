const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const marketSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please provide a name for the item"] // Added a custom error message
    },
    description: {
        type: String,
    },
    image: {
        url: { 
            type: String, 
            required: true
        },
        filename: { // Good to have if you're using services like Cloudinary
            type: String
        }
    },
    price: {
        type: Number,
        required: true,
        min: 0 // Prevents accidental negative pricing
    },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt

const Market = mongoose.model("Market", marketSchema);

module.exports = Market;