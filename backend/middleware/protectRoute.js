import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { ENV_VARS } from "../config/enVars.js";

export const protectRoute = async (req,res,next) => {
    try {
        const token = req.cookies["jwt-netflix"]

        if(!token){
            return res.status(401).json({sucess: false,message : "unauthorized - No token Provided"})
        }
        const decoded = jwt.verify(token,ENV_VARS.JWT_SECRET)
        if(!decoded){
            return res.status(401).json({sucess: false,message : "unauthorized - Invalid token"})  
        }
        const user = await User.findById(decoded.userID).select("-password");

		if (!user) {
			return res.status(404).json({ success: false, message: "User not found" });
		}

		req.user = user;
        next();
    } catch (error) {
        console.log("Error in protectroute middleware:",error.message)
        res.status(500).json({ sucess:false,message: "Internal server error"})
    }
}