import express from "express"
import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/movie.route.js";
import tvRoutes from "./routes/tv.route.js";
import { ENV_VARS } from "./config/enVars.js";
import { connectDB } from "./config/db.js";

//import { ENV_VARS } from "./config/enVars.js";
const app = express();

const PORT = ENV_VARS.PORT;
app.use(express.json()); //allow us to parse req.body object
app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/movie",movieRoutes );
app.use("/api/v1/tv", tvRoutes);


app.listen(PORT,() => {
 console.log("Server started at http://localhost:" +PORT);
 connectDB();

 
})



