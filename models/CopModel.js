const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const copSchema = new Schema({
    "name": {
        "type": "String"
    },
    "email": {
        "type": "String"
    },
    "cpf": {
        "type": "String"
    },
    "longitude": {
        "type": "String",
    },
    "latitude": {
        "type": "String"
    },
    "type": {
        "type": "String"
    },
    "harvestDate": {
        "type": Date,
    },
    "event": {
        "type": "String",
    },
    "createdAt": {
        "type": Date,
        "default": Date.now
    },
});


module.exports = mongoose.model("Cop", copSchema);