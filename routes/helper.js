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

  export async function getUserByName(username){
    return await client.db("guvi-node-app").collection("users").findOne({username:username})
  }

  export async function getUserByEmail(email){
    return await client.db("guvi-node-app").collection("users").findOne({email:email})
  }

  export async function createUser(data) {
    return await client.db("guvi-node-app").collection("users").insertOne(data);
      
  }