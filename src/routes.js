const express = require('express');

const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = express.Router();

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

//get post put delete ... get para buscar info , post para criar algo put para editar e delete para deletar

routes.post("/boxes", BoxController.store); //usar postman ou insominia para testar .. metodo post , https://localhost:3333/boxes 

routes.get("/boxes/:id", BoxController.show); 

routes.post("/boxes/:id/files",
     multer(multerConfig).single('file'), 
     FileController.store ); // single pq eh um arquivo por vez

module.exports = routes; //esse arquivo de rota ta exportando a variavel extends
// mongo db
// mongoose modo de extrair o banco