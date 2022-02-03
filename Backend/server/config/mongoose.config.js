const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/Games", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("Yo you're connected to the mongo db!"))
    .catch(err=>console.log("beep boop bop, bd connection was a flop", err))