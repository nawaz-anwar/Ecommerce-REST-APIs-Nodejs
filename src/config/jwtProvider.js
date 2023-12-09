const jwt = require("jsonwebtoken");
const { default: tokens } = require("razorpay/dist/types/tokens");

const SECRET_KEY = "fsdfpofafwen89hnd39824bfjsdjfwern493of23mnksdfneleui"

const generateToken=(userId)=>{
    const token = jwt.sign({userId},SECRET_KEY,{expiresIn:"48h"})
    return token;
}

const getUserIdFromToken=(token)=>{
    const decodedToken = jwt.verify(token,SECRET_KEY)
    return decodedToken.userId;
}

module.exports = {generateToken,getUserIdFromToken}