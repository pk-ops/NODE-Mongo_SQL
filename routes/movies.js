import express from "express";

import { createMovies, 
         deleteMoviesById, 
         getAllMovies,
         getMoviebyId, 
         updateMoviesById } from "./helper.js";

const router=express.Router();

router.get('/', async function (request, response) {
    // db.movies.find({});
    if(request.query.rating){
      request.query.rating=+request.query.rating;
     
    }

    console.log(request.query);
    
    const movie= await getAllMovies(request)
    response.send(movie);
    console.log(movie);
    
  })
  
  router.get("/:id", async function(request, response) {
    const { id } =request.params;
    console.log(id);
    console.log(request.params,id)
   
    // const movie=movies.find((mv)=>mv.id===id);
    //db.movies.findOne({id:101})
  
    const movie= await getMoviebyId(id);
  
    
    movie ? response.send(movie) : response.status(404).send({msg:"movie not found"})
    console.log(movie);
  }) 
  
  //middleware-express.json()--body->JSON (it is inbuilt middleware)
  router.post('/',  async function (request, response) {
    const data=request.body;
    console.log(data);
    //db.movies.insertMany()
    const result=await createMovies(data);
    response.send(result);
    console.log(result);
  })
  
  router.put("/:id",async function(request,response){
    const {id}=request.params;
    console.log(request.params,id);
    const data=request.body;
    //db.movies.updateOne({id:"101"},{set:data})
    const result=await updateMoviesById(id, data);
    response.send(result);
    console.log(result);
  })
  
  router.delete("/:id", async function(request, response) {
    const { id } =request.params;
    console.log(id);
    console.log(request.params,id)
  
    //db.movies.deleteOne({id."101"})
    const result= await deleteMoviesById(id)
  
    console.log(result);
    result.deletedCount>0
    ? response.send({msg:"movie delete successfullu"})
    :response.status(404).send({msg:"movie not found"})
  })
  
  export const moviesRouter = router;


