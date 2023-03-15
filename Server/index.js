require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const getRoutes=require('./routes/getdata')
const UpdateRoutes=require('./routes/update')
//const editdata=require('./routes/edit')

// database connection
connection;

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/getData", getRoutes);
// app.use("/users/:id",UpdateRoutes);
app.use("/api/users/:id", UpdateRoutes);

//app.use("/usersUpdate",editdata)

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Listening on port ${port}...`));
