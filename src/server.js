const app = require(".");
const { connectDb } = require("../config/db");
const PORT = 5454;

app.listen(PORT, async ()=>{
    await connectDb();
    console.log("Ecommerce APIs is listing on PORT: ",PORT);
})