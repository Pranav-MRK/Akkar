const mongoose = require("mongoose");
const Artist = require("./Model/listings");

const MongoUrl = "mongodb://127.0.0.1:27017/aakaar";

main().then(() => {
    console.log("Connected to DB for seeding");
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect(MongoUrl);
}

const seedDB = async () => {
    // Delete existing data to start fresh
    await Artist.deleteMany({});


    const sampleArtists = 
    [
        {
            name: "Arjun Deshmukh",
            specialty: "Terracotta Sculpture",
            bio: "Based in Pune, Arjun specializes in large-scale terracotta figures inspired by Rural Maharashtra life. His work has been featured in the Jehangir Art Gallery.",
            location: "Pune",
            country: "India",
            image: { url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" },
            portfolio: [
                { 
                    title: "The Warkari Spirit", 
                    imageUrl: "https://images.unsplash.com/photo-1565191999001-551c187427bb?q=80&w=1000&auto=format&fit=crop", 
                    description: "A 4-foot sculpture depicting a pilgrim's journey." 
                },
                { 
                    title: "Clay Workshop 2024", 
                    imageUrl: "https://images.unsplash.com/photo-1493106819501-66d381c466f1?q=80&w=1000&auto=format&fit=crop", 
                    description: "Annual workshop at his studio in Kothrud." 
                }
            ]
        },
        {
            name: "Elena Moretti",
            specialty: "Italian Ceramics & Glazing",
            bio: "Elena brings the traditional pottery techniques of Tuscany to the modern world, focusing on vibrant blue glazes and organic shapes.",
            location: "Florence",
            country: "Italy",
            image: { url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop" },
            portfolio: [
                { 
                    title: "Azure Vase Collection", 
                    imageUrl: "https://images.unsplash.com/photo-1578749553858-1d1d994ca61f?q=80&w=1000&auto=format&fit=crop", 
                    description: "Hand-thrown stoneware with custom cobalt glazes." 
                }
            ]
        },
        {
            name: "Savita Tai Patil",
            specialty: "Paithani Textile Weaving",
            bio: "A master weaver with 30 years of experience in Yeola. She preserves the intricate 'Asavali' motifs of the Royal Paithani silks.",
            location: "Yeola, Nashik",
            country: "India",
            image: { url: "https://images.unsplash.com/photo-1589386417686-0d34b5903d23?q=80&w=1000&auto=format&fit=crop" },
            portfolio: [
                { 
                    title: "Gold Thread Work", 
                    imageUrl: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop", 
                    description: "Macro shot of Zari weaving on a handloom." 
                }
            ]
        },
        {
            name: "Marcus Thorne",
            specialty: "Metal & Steel Sculpting",
            bio: "Marcus creates abstract human forms using recycled industrial steel, exploring the tension between nature and machinery.",
            location: "Brooklyn",
            country: "USA",
            image: { url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop" },
            portfolio: [
                { 
                    title: "The Iron Man", 
                    imageUrl: "https://images.unsplash.com/photo-1518131672697-613becd4fab5?q=80&w=1000&auto=format&fit=crop", 
                    description: "A life-sized masculine figure made of welded bolts." 
                }
            ]
        },
        {
            name: "Kavita Gokhale",
            specialty: "Miniature Clay Art",
            bio: "Kavita replicates traditional Indian kitchen sets (Bhatukali) in miniature form, using natural river clay.",
            location: "Thane",
            country: "India",
            image: { url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop" },
            portfolio: [
                { 
                    title: "Tiny Traditions", 
                    imageUrl: "https://images.unsplash.com/photo-1590422329302-31149495143a?q=80&w=1000&auto=format&fit=crop", 
                    description: "Miniature earthen pots and pans." 
                }
            ]
        },
        {
            name: "Yuki Tanaka",
            specialty: "Kintsugi Artist",
            bio: "Specializing in the Japanese art of repairing broken pottery with gold, Yuki teaches the philosophy of finding beauty in imperfection.",
            location: "Kyoto",
            country: "Japan",
            image: { url: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1000&auto=format&fit=crop" },
            portfolio: [
                { 
                    title: "The Golden Scar", 
                    imageUrl: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1000&auto=format&fit=crop", 
                    description: "A 16th-century bowl restored with 24k gold lacquer." 
                }
            ]
        },
        {
            name: "Ramesh Solanki",
            specialty: "Idol Sculpting (Murti)",
            bio: "An award-winning sculptor from Pen, the hub of Ganesha idol making. He focuses on eco-friendly Shadu Mati (natural clay) idols.",
            location: "Pen, Raigad",
            country: "India",
            image: { url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop" },
            portfolio: [
                { 
                    title: "Eco-Ganesha 2025", 
                    imageUrl: "https://images.unsplash.com/photo-1621370609590-e3734a70659a?q=80&w=1000&auto=format&fit=crop", 
                    description: "Unpainted natural clay idol for the Sarvajanik festival." 
                }
            ]
        },
        {
            name: "Clara Dubois",
            specialty: "Linen Textile Design",
            bio: "Clara designs high-end sustainable home textiles using flax grown in the French countryside.",
            location: "Lyon",
            country: "France",
            image: { url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop" },
            portfolio: [
                { 
                    title: "Organic Weaves", 
                    imageUrl: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=1000&auto=format&fit=crop", 
                    description: "Exhibition of hand-dyed linen curtains." 
                }
            ]
        },
        {
            name: "Sameer Kulkarni",
            specialty: "Abstract Stone Carving",
            bio: "Sameer works primarily with black basalt rock found in the Deccan plateau, carving flowing shapes out of hard stone.",
            location: "Aurangabad",
            country: "India",
            image: { url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop" },
            portfolio: [
                { 
                    title: "Basalt Flow", 
                    imageUrl: "https://images.unsplash.com/photo-1554181067-5600f13bb912?q=80&w=1000&auto=format&fit=crop", 
                    description: "A polished sculpture reflecting the Ellora caves' influence." 
                }
            ]
        },
        {
            name: "Sophie van der Berg",
            specialty: "Modern Porcelain",
            bio: "Sophie creates functional porcelain art that is thin as paper but durable for daily use.",
            location: "Amsterdam",
            country: "Netherlands",
            image: { url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop" },
            portfolio: [
                { 
                    title: "White Shell Collection", 
                    imageUrl: "https://images.unsplash.com/photo-1518991021182-038bb326e758?q=80&w=1000&auto=format&fit=crop", 
                    description: "Porcelain bowls displayed at the Stedelijk Museum." 
                }
            ]
        }
    ];




    await Artist.insertMany(sampleArtists);
    console.log("Data was initialized!");
};

seedDB();