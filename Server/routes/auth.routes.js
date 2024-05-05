import express from "express";

import { signUpUser,logInUser,logoutUser, getUserProfile } from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/signup", signUpUser);
authRouter.post("/login",logInUser);
authRouter.post("/logout",logoutUser);
authRouter.get("/profile",getUserProfile);

export default authRouter;
