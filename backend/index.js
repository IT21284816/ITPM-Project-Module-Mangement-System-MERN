require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const router = require("./routes/student-router");
const Supervisor = require("./routes/Supervisor");

// database connection

connection();

// middlewares
app.use(express.json());
app.use(cors());
app.use(router);
app.use(Supervisor);

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);


const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
