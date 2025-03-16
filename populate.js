require("dotenv").config()
const connectDB = require("./db/connect");
const Product = require("./models/product");
const jsonProducts = require("./products.json");

const start = async()=> {
    try {
        await connectDB(process.env.MONGO_URI)
        await Product.deleteMany();
        // await Product.create(jsonProducts)
        await Product.insertMany(jsonProducts)
        console.log("Connection established");
        process.exit(0)
        
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
};

start()
