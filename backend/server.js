const express = require("express");
const dorenv = require("dotenv");
const cors = require("cors");
const connectdb = require("./config/db");
const clientRoutes = require("./routes/clientRoutes");
const authRoutes = require("./routes/authRoutes");
dorenv.config();    
connectdb();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/clients", clientRoutes);  
app.use("/api/auth",authRoutes);
const PORT = process.env.PORT || 5865;
app.listen(PORT, () => console.log('Server is running on port 5865'));