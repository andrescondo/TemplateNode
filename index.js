require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

//declaracion de servidor
const app = express();

//CORS
//const whileList = ['https://tusitioweb.com'];//build
const whileList = ['*']; //dev
app.use(cors({ origin: whileList })); //Solo el sitio

//Lectura y Parseo del body
app.use(express.json());

//adicion de limite en datos enviados
app.use(bodyParser.json({ limit: '50mb' }));

//se establece las rutas
app.use('/api/user', require('./router/user.router'));

const port = process.env.PORT || 4040;
app.listen(port, () => {
  console.log('Server run in port: ', port);
});
