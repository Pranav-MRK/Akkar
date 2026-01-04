const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistSchema = new Schema({
    name: {
        type: String,
        required: true 
    },
    specialty: {
        type: String,
        required: true 
    },
    bio: {
        type: String,
    },
    location: String,
    country: String,
    // The artist's profile picture
    image: {
        url: { 
            type: String, 
            default: "https://example.com/default-avatar.png" 
        }
    },
    portfolio: [{
        title: String,
        imageUrl: String,
        description: String
    }],
});

const Artist = mongoose.model('Artist', artistSchema);
module.exports = Artist;