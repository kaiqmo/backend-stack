const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors());

const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', socket=> { //socket representa usuario com servidor
    socket.on('connectRoom', box=>{
        socket.join(box);
    })
});


mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-gtnmd.mongodb.net/omnistack?retryWrites=true',{
    useNewUrlParser: true,
});

app.use((req,res, next)=>{
    req.io = io;

    return next();// processa o middleware e vai pro resto da aplicacao e se nao tiver ele trava aqui
});

app.use(express.json());

app.use(express.urlencoded({ extended:true }));

app.use('/files', express.static(path.resolve(__dirname,'..', 'tmp')));// garante que achei o arquivo tmp

app.use(require('./routes'));// caminho relativo do routes

server.listen(3333); // rota localhost:3333/teste