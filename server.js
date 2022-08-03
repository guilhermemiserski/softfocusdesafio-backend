const express = require('express');
const mongoose = require('mongoose');
const cors = require ('cors');
const { routes } = require('./routes');
const app = express();
const port = 3000;
app.use(cors())


mongoose.connect('mongodb+srv://g7miserski:1234@softfocus-api.immlra8.mongodb.net/?retryWrites=true&w=majority');
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