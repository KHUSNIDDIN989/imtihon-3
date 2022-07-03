import jwt from "jsonwebtoken";

const sign = (payload) => jwt.sign(payload, process.env.TOKEN_KEY);

const verify = (token) => jwt.verify(token, process.env.TOKEN_KEY);

export { sign, verify };
