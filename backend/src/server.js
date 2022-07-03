import "dotenv/config";
import express from "express";
import cors from "cors";
const PORT = process.env.PORT || 9009;
const app = express();

import router from "./modules/index.js";

app.use(express.json());

app.use(cors("/*"));

app.use("/", router);

app.use("/*", (_, res) => res.sendStatus(404));

app.listen(PORT, console.log(PORT));
