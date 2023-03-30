import express from "express";
import { AuthController } from "./AuthController";

class AuthRouter {
  authRoutes = express.Router();
  authController = new AuthController();
  constructor() {
    this.authRoutes.post("/user/signup", this.authController.signup);
    this.authRoutes.post("/user/signin", this.authController.signIn);
  }
}

export default new AuthRouter().authRoutes;
