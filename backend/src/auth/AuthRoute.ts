import express from "express";
import { AuthController } from "./AuthController";
import passport from "passport";

class AuthRouter {
  authRoutes = express.Router();
  scanController = new AuthController();
  constructor() {
    this.authRoutes.post("/user/signup", this.scanController.signup);
    this.authRoutes.post(
      "/user/signin",
      passport.authenticate("signin", { session: false }),
      this.scanController.signIn
    );
  }
}

export default new AuthRouter().authRoutes;
