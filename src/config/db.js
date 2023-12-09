const mongoose = require("mongoose")

const mondbUrl = "mongodb+srv://codingdays576:zhMzxxZXVaIA5z1i@cluster0.o0jexp2.mongodb.net/?retryWrites=true&w=majority"

const connectDb=()=>{
    return mongoose.connect(mondbUrl);
}

module.exports = {connectDb}