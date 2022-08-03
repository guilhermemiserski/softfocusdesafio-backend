const { Router } = require('express');
const { createCop, updateCop, deleteCop, getCop, getCopById } = require('../controllers/index')

const routes = Router();

routes.get('/cops', getCop);

routes.get('/cops/:id', getCopById)

routes.post('/cops', createCop);

routes.put('/cops/:id', updateCop);

routes.delete('/cops/:id', deleteCop);


module.exports = { routes };