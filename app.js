require("dotenv").config()
require("express-async-errors")
const express = require("express");
const app = express();
const connectDB = require("./db/connect")
const productsRouter = require("./routes/products")
const errorHandlerMiddleware = require("./middleware/error-handler")
const notFoundMiddleWare = require("./middleware/not-found")

app.use(express.json())


app.get("/", (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>')
});

app.use("/api/v1/products", productsRouter )

app.use(errorHandlerMiddleware)
app.use(notFoundMiddleWare)


const port = process.env.PORT || 3000

const start = async() => {
    try {
        //connect db
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {console.log("The app is running in the port: " + port)})
    } catch (error) {
        console.log(error)
    }
}

start()

