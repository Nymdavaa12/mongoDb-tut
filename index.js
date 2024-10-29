import express from "express";
import { connectDb } from "./database/index.js";
import { CreateUser } from "./controller/userController.js";

const app = express();

app.use(express.json());

const port = 8000;

const UserRouter = express.Router();
UserRouter.post("/createUser", CreateUser);

app.listen(port, () => {
  console.log(`server running at a http://localhost:${port}/`);
});
