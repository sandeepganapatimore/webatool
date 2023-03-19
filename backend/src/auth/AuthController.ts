import AuthServices from "./AuthServices";
import jwt from "jsonwebtoken";

export class AuthController {
  async signup(req: any, res: any) {
    return await res.send({
      success: true,
      data: null,
      message: "Created successfully",
    });
  }

  async signIn(req: any, res: any, next: any) {
    const user = req.user;
    try {
      if (!user) {
        const error = new Error("An Error occurred");
        return next(error);
      }
      req.login(user, { session: false }, async (error) => {
        if (error) {
          return next(error);
        }
        const body = { _id: user._id, email: user.email };
        const token = jwt.sign({ user: body }, "top_secret");
        return res.send({
          success: true,
          data: { token: token },
          message: "Sign in successfully",
        });
      });
    } catch (error) {
      return res.send({ error });
    }
  }
}
