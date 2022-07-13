import { client } from "../index.js";
import {ObjectId} from "mongodb";

export async function deleteMoviesById(id) {
    return await client.db("guvi-node-app").collection("movies").deleteOne({ _id : ObjectId(id) });
  }
  
  export async function updateMoviesById(id, data) {
    return await client.db("guvi-node-app").collection("movies").updateOne({ _id : ObjectId(id) },{ $set: data });
  }
  
  export async function createMovies(data) {
    return await client.db("guvi-node-app").collection("movies").insertMany(data);
  }
  
  export async function getMoviebyId(id) {
      return await client.db("guvi-node-app").collection("movies").findOne({ _id : ObjectId(id) });
    
  }

  export async function getAllMovies(request) {
    return await client.db("guvi-node-app").collection("movies").find(request.query).toArray();
      
  }