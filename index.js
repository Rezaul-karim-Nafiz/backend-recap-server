const express = require('express')
const app = express()
const cors = require('cors');
require('dotenv').config()
const port = process.env.PORT || 5055;

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello 6000 port!')
})


const { MongoClient } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.0mhgi.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const collection = client.db("backendRecap").collection("items");
  
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})