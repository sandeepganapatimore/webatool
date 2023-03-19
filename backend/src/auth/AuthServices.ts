import AuthModel from "./AuthModel";
import crypto from "crypto";

class AuthServices {
  async signup(username: string, password: string) {
    var salt = crypto.randomBytes(16);
    crypto.pbkdf2(
      password,
      salt,
      31000,
      32,
      "more32",
      async function (err, hashPassword) {
        if (err) {
          return err;
        }
        return await AuthModel.create({
          username: username,
          password: hashPassword,
        });
      }
    );
  }

  async login(username, password) {
    return await AuthModel.findOne({
      where: {
        username: username,
        password: password,
      },
    });
  }
}

export default new AuthServices();
