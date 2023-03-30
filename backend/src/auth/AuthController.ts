import jwt from "jsonwebtoken";
import UserModel from "../users/UserModel";
import AuthServices from "./AuthServices";

export class AuthController {
  async signup(req: any, res: any) {
    try {
      AuthServices.signup(req.body);
      return await res.send({
        success: true,
        data: null,
        message: "Created successfully",
      });
    } catch (error) {
      return res.send({ error });
    }
  }

  async signIn(req: any, res: any, next: any) {
    const { email, password } = req.body;
    try {
      const user: any = await UserModel.findOne({ where: { email: email } });
      if (!user) {
        return res.status(404).send({
          success: false,
          message: "User not found",
        });
      }
      const validate = await user.comparePassword(password, user.password);

      if (!validate) {
        return res.status(404).send({
          success: false,
          message: "Username or password doest not match",
        });
      }
      const token = jwt.sign({ email, password }, "top_secret", {
        expiresIn: "5h",
      });
      return res.send({
        success: true,
        data: { token: token },
        message: "Sign in successfully",
      });
    } catch (error) {
      return res.send({ error });
    }
  }
}
