const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
    //Name, Type, Description, Skill1, Skill2, Skill3 numLegs
    name:{
        type: String,
        required: [true, "You need a Title!"],
        minLength: [3, "You need at least 3 Characters!!"]
    },
    score:{
        type: Number,
        required: [true, "You need a number"],
        min: 0
    },
    type:{
        type: String,
        required: [true, "You need a Pet Type!"],
        minLength: [3, "You need at least 3 Characters!!"]
    },
    description:{
        type: String,
        required: [true, "Describe your pet please!"],
        minLength: [3, "You need at least 3 Characters!!"]
    },
    skillOne:{
        type: String,
    },
    skillTwo:{
        type: String,
    },
    skillThree:{
        type: String,
    },
    numLegs:{
        type: Number,
        min: 0
    }
}, {timestamps:true})

const Pet = mongoose.model("Pet",PetSchema);

module.exports = Pet;