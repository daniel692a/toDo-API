const mongoose = require('mongoose');

const mongoUrl = 'mongodb+srv://DanielArm:quadricular@cluster0.uckdc.mongodb.net/todoapp?retryWrites=true&w=majority'

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;

!db ? console.log("Error al conectar") : console.log("Conectado");