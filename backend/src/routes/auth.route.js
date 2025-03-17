import express from "express";
import { signup, login, logout, updateProfile } from "../controllers/auth.controller.js";
import authorize from "../middlewares/authorize.middleware.js";

const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.put("/update-profile", authorize, updateProfile);

export default authRouter;