import express from "express";
const router = express.Router();

import {
  GET_COMP_ALL,
  GET_COMP,
  GET_COMPLEX,
  GET_ROOM,
  GET_BANK,
  GET_CALC,
} from "./main/main.js";

import {
  DELETE_COMPANY,
  DELETE_COMPLEX,
  DELETE_ROOMS,
  GET_COMPLEX1,
  GET_ROOMS,
  POST_COMPANY,
  POST_COMPLEX,
  POST_ROOMS,
} from "./admin/admin.js";

import POST_AUTH from "./auth/auth.js";
router
  .get("/companies", GET_COMP_ALL)
  .get("/company/:id", GET_COMP)
  .get("/complex/:id", GET_COMPLEX)
  .get("/room/:id", GET_ROOM)
  .get("/bank/:id", GET_BANK)
  .get("/calc", GET_CALC)
  .get("/complex", GET_COMPLEX1)
  .get("/room", GET_ROOMS)
  .post("/postcompany", POST_COMPANY)
  .post("/postcomplex", POST_COMPLEX)
  .post("/postroom", POST_ROOMS)
  .post("/auth", POST_AUTH)
  .delete("/delete/:id", DELETE_COMPANY)
  .delete("/deletecomplex/:id", DELETE_COMPLEX)
  .delete("/deleterooms/:id", DELETE_ROOMS);

export default router;
