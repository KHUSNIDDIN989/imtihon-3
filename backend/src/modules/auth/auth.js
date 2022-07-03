import auth from "./model.js";
import { sign1 } from "jsonwebtoken";
const POST_AUTH = async (req, res) => {
  try {
    const { login, password } = req.body;

    const allUser = await auth();
    const foundUser = allUser.find(
      (e) => e.user_name == login && e.user_password == password
    );
    console.log(
      sign1({
        user_id: foundUser.user_id,
        user_name: foundUser.user_name,
      })
    );
    if (foundUser) {
      return res.json({
        token: 12121,
        status: "ok",
      });
    }

    res.status(401);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export default POST_AUTH;
