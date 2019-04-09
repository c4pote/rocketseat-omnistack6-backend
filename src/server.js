const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');


const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', socket =>{
    socket.on('connectRoom', box => {
        socket.join(box);
    })
})

mongoose.connect('mongodb+srv://omnistack:htefukws99@cluster0-8quga.mongodb.net/omnistack?retryWrites=true', {
    useNewUrlParser: true
});


app.use((req, res, next) =>{
    req.io = io;
    return next();
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));

app.use(require('./routes'));

server.listen(4545);