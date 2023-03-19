import UserModel from "../users/UserModel";
import bcrypt from "bcrypt";

class AuthServices {
  async signup(source: any) {
    const { firstName, lastName, email, password, allowExtraEmails } = source;
    return await UserModel.create({
      firstName,
      lastName,
      email,
      password: bcrypt.hashSync(password, 10),
      allowExtraEmails,
    });
  }
}

export default new AuthServices();
