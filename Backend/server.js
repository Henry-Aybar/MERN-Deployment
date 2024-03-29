const express = require('express');
const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

// app.get("/api", (req,res)=>{
//     res.json({message:"You did it!"});
// })

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({extended:true}))

require("./server/routes/pet.routes")(app);

app.listen(port, ()=>console.log(`running on ${port} is the new way I like to be!`));