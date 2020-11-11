// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://DanielArm:quadricular@cluster0.fu4hu.mongodb.net/TaskToDo?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     if (err) {
//         console.log('No conectado')
//     } else{
//         console.log('Conectado')
//     }
//     client.close();
// });

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers/Query');
const dbconnect = require('./database');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
});

server.listen().then(() => {
    console.log('Corriendo servidor GraphQl en <http://localhost:4000/grapqhql>')
});