import jwt from "jsonwebtoken"
import { ENV_VARS } from "../config/enVars.js"

export const generateTokenAndSetCookie = (userID, res) => {
    const token= jwt.sign({ userID}, ENV_VARS.JWT_SECRET,{expiresIn: "15d"});

    res.cookie("jwt-netflix",token,{
        maxAge: 15 * 24 * 60 * 60 * 1000,  // 15 days in MS
        httpOnly:true,         //this cookie is only acessible via browser(Prevent xss atacks cross-site scrioting attacks)
        sameSite: "strict",  //CSRF attacks cross-site request forgery attacks
        secure: ENV_VARS.NODE_ENV !== "development" //cookie will only be set in https in production

        
    })
   return token;
};

