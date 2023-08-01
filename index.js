require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require("./database");

const userRoutes = require('./routes/users');
const authRoutes = require("./routes/authVerify")
const passwordResetRoutes = require("./routes/passReset");


// Database connection

connection();


// Middleware

app.use(express.json());
app.use(cors());

// Routes


app.get('/',(req,res)=>{
    res.send("☆☆☆☆Hi this VIJAY !!!☆☆☆☆")
});
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/password-reset", passwordResetRoutes);


// Adding port

const port = process.env.PORT || 7001;
app.listen(port, () => console.log(`Server is running at Port :${port}`));