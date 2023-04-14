import express from "express";
import bcrypt from "bcrypt";
import { createUser, getUserByEmail, getUserByName } from "./helper.js";
import jwt from 'jsonwebtoken';

const router = express.Router();

  async function genHashedPassword(password){
    const No_of_ROUNDS=10;
    const salt= await bcrypt.genSalt(No_of_ROUNDS)
    const hashedPassword=await bcrypt.hash(password,salt);
    return hashedPassword
  }
 
  //middleware-express.json()--body->JSON (it is inbuilt middleware)
  router.post('/',  async function (request, response) {
    const {username,email,password}=request.body;
    // console.log(data);
    const userFromDB = await getUserByName(username);
    // console.log(userFromDB);
    if(userFromDB){
      response.status(400).send({message:"username already exists"})
    }else if(password.length<8){
      response.status(400).send({message:"password must be greater than 8"})
    }
    else{
      const hashedPassword= await genHashedPassword(password);
      console.log(hashedPassword);
      const result= await createUser({
        username:username,
        email:email,
        password:hashedPassword
      })
      response.status(200).send(result)
    }
  })

  router.post('/login',async function(request,response){
    const {email,password}=request.body;

    const userFromDB=await getUserByEmail(email)
    console.log(userFromDB)

    if(!userFromDB){
      response.status(401).send({message:"Invalid Credentials"})
      console.log("username not found")
    }
    else{
      const storedPassword=userFromDB.password;
      const isPasswordMatch= await bcrypt.compare(password,storedPassword);
      console.log(isPasswordMatch)
      if(isPasswordMatch){

        const token=jwt.sign({id:userFromDB._id},process.env.SECRET_KEY)
        response.status(200).send({message:"Successful login",token:token,id:userFromDB._id,username:userFromDB.username})
      }else{
        response.status(401).send({message:"Invalid Credentials"})
      }
    }
  })
  
  export const usersRouter= router;