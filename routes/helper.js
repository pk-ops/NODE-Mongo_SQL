import { client } from "../index.js";


export async function deleteMoviesById(id) {
    return await client
      .db("guvi-node-app")
      .collection("movies")
      .deleteOne({ id: id });
  }
  
  export async function updateMoviesById(id, data) {
    return await client
      .db("guvi-node-app")
      .collection("movies")
      .updateOne({ id: id }, 
        { $set: data });
  }
  
  export  async function createMovies(data) {
    return await client
    .db("guvi-node-app")
    .collection("movies")
    .insertMany(data);
  }
  
  export async function getAllMovies(req) {
    return await client

      .db("guvi-node-app")
      .collection("movies")
      .find(req.query)
      .toArray();
  }
  
  export async function getMoviebyId(id) {
      return await client
          .db("guvi-node-app")
          .collection("movies")
          .findOne({ id: id });
    
  }