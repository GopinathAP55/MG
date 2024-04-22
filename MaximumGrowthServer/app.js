// Importing required modules
const express = require('express');
const app = express();
const port = 3000;
var router = require('express').Router();

// const mongoose = require('mongoose');

// // Connection URI
// const uri = 'mongodb+srv://maximumgrowthsoftware:@mg.phosf67.mongodb.net/'; // Change this to your MongoDB URI

// // Connect to MongoDB
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(error => console.error('Error connecting to MongoDB:', error));



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://maximumgrowthsoftware:maximum@mg.phosf67.mongodb.net/?retryWrites=true&w=majority&appName=mg";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to MongoDB
async function connectToMongo() {
  try {
    // Connect to the MongoDB cluster
    await client.connect();
    client.db('mg-algo')
    console.log('Connected to MongoDB Atlas');

    // Do something with the connected client, like accessing databases and collections

  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
  }
}

connectToMongo();
// Importing routers


const indexRouter = require('./routes/index');

// Middleware to parse JSON bodies
app.use(express.json());

// Using routers
app.use('/', indexRouter);


router.use('/mg',indexRouter)

// Starting the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
