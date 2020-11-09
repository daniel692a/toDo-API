const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://DanielArm:quadricular@cluster0.fu4hu.mongodb.net/TaskToDo?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    if (err) {
        console.log('No conectado')
    } else{
        console.log('Conectado')
    }
    client.close();
});