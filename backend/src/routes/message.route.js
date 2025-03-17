import express from "express";
import authorize from "../middlewares/authorize.middleware.js";
import { getMessages, getUsersForSidebar, sendMessage } from "../controllers/message.controller.js";

const messageRouter = express.Router();

messageRouter.get("/users", authorize, getUsersForSidebar);
messageRouter.get("/:id", authorize, getMessages);

messageRouter.post("/send/:id", authorize, sendMessage);

export default messageRouter;