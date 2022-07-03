import pkg from "jsonwebtoken";
const { sign } = pkg;

const sign1 = (payload) => sign(payload, process.env.TOKEN_KEY);

// const verify = (token) => jwt.verify(token, process.env.TOKEN_KEY);

export { sign1 };
