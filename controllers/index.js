const mongoose = require('mongoose');
require('../models/CopModel.js');
const Cop = mongoose.model("Cop");

const createCop = (request, response) => {
    //adicionar cop
    Cop.create(request.body).then(function (v) {
        response.send(v);
    })
}

const updateCop = (request, response) => {
    //editar cop
    Cop.findByIdAndUpdate({ _id: request.params.id },
        request.body).then(function () {
            Cop.findOne({ _id: request.params.id }).then(function (v) {
                response.send(v);
            });
        })
}

const deleteCop = (request, response) => {
    //deletar cop
    Cop.findByIdAndRemove({ _id: request.params.id }).then(function (v) {
        response.send(v);
    })
}

const getCop = (request, response) => {
    //retornar todos os cops
    Cop.find({}).then(function (v) {
        response.send(v);
    });
}

const getCopById = (request, response) => {
    //retorna cop pelo id
    Cop.find({ _id: request.params.id }).then(function (v) {
        response.send(v);
    });
}

module.exports = { createCop, updateCop, deleteCop, getCop, getCopById }