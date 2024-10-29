import { UserModel } from "../model/user";

export const CreateUser = async (req, res) => {
  const { email, firstName } = req.body;
  console.log(req.body);
  try {
    const user = await new UserModel({
      email: email,
      firstName: firstName,
    }).save();

    res.json({ user: user });
  } catch (error) {
    req.json({ message: error });
  }
};
