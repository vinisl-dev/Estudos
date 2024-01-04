import express from "express";
import {UserController} from "./controllers/user.controller.js";

const port = 3000;
const app = express();
const userController = new UserController();

app.use(express.json());

app.post("/users", userController.handle);

app.listen(port|3000, ()=>{
  console.log("Server is running in the port:", port);
});