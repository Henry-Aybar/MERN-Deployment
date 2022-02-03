const PetController = require("../controllers/pet.controller");
const Pet = require("../models/pet.models");

module.exports = app => {
    app.get("/api/test", PetController.testResponce);

    app.get("/api/pets/findAll", PetController.findAllPets);

    app.post("/api/pets/create", PetController.createPet);

    app.get("/api/pets/pet/:_id", PetController.findOnePet);

    app.delete("/api/pets/:_id/delete", PetController.deletePet);

    app.patch("/api/pets/:_id/update", PetController.updateOnePet);

    app.patch("/api/pets/:_id/upvote", PetController.upVotePet);

    
}