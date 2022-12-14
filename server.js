const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const cors = require ('cors');
const { routes } = require('./routes');
const app = express();
const port = process.env.PORT || 3000;
app.use(cors())


mongoose.connect(process.env.MONGO_SERVER);
//confirma conexão
mongoose.connection.on('connected', function () {
  console.log('Connected to Database');

  app.listen(port, () => {
    console.log("Server em execução na porta " + port);
  })
});
//mensagem de erro caso ocorra
mongoose.connection.on('error', (err) => {
  console.log('Database error ' + err);
});

//ativa middleware
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
)

//usar rotas
app.use(routes);