const localStrategy = require("passport-local").Strategy;
import UserModel from "../users/UserModel";

const loginStrategy = new localStrategy(
  { usernameField: "email", passwordField: "password" },
  async (email: any, password: any, done: any) => {
    try {
      const user: any = await UserModel.findOne({ where: { email: email } });
      if (!user) {
        return done(null, false, { message: "User not found" });
      }
      const validate = await user.comparePassword(password, user.password);
      if (!validate) {
        return done(null, false, { message: "Wrong Password" });
      }
      return done(null, user, { message: "Logged in Successfully" });
    } catch (error) {
      done(error);
    }
  }
);

export { loginStrategy };
