const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const router = require('./routes/todoRoutes');

 require("dotenv").config();

 const app = express();
 const PORT = process.env.port || 5001

 app.use(express.json());
 app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/mern-todo", {
    useNewUrlParser:true,
    useUnifiedTopology: true
}, () => {
    console.log("DB Connected")
});

app.use(router)

 app.listen(PORT, () => console.log(`App is runing ${PORT}`))