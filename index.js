// const express = require('express');//importing 3rd package
// const { MongoClient } = require('mongodb');

import  express from 'express';
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { moviesRouter } from './routes/movies.js';


const app = express();

app.use(express.json());

dotenv.config();
   
 // const MONGO_URL = "mongodb://localhost";
  // const MONGO_URL = "mongodb://127.0.0.1"; //  nodejs - 16+
    
  const MONGO_URL=process.env.MONGO_URL;

  const PORT = process.env.PORT;
  // Node - MongoDB
    async function createConnection() {
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    console.log("Mongo is connected ✌😊");
    return client;
  }

 export const client = await createConnection();

  app.get('/', function (request, response) {
  response.send('Hello World')
})

app.use("/movies", moviesRouter);

app.listen(PORT,()=>console.log(`APP started ${PORT}`));