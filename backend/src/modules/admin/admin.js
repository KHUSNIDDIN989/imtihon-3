import {
  deleteCompany,
  getComplex,
  getRoom,
  postCompany,
  postComplex,
  deleteComplex,
  deleteRooms,
  postRoom,
} from "../admin/model.js";

const GET_COMPLEX1 = async (_, res) => {
  try {
    res.json(await getComplex());
  } catch (err) {
    console.log(err);
    res.sendStatus(5000);
  }
};

const GET_ROOMS = async (req, res) => {
  try {
    res.json(await getRoom());
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const POST_COMPANY = async (req, res) => {
  try {
    const { name, img } = req.body;
    console.log(name, img);
    res.json(await postCompany(name, img));
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const POST_COMPLEX = async (req, res) => {
  try {
    const { name, address, id } = req.body;
    res.json(await postComplex(name, address, id));
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const POST_ROOMS = async (req, res) => {
  try {
    const { room, price, kv, complex_id } = req.body;
    res.json(await postRoom(room, price, kv, complex_id));
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const DELETE_COMPANY = async (req, res) => {
  try {
    const { id } = req.params;
    res.json(await deleteCompany(id));
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const DELETE_COMPLEX = async (req, res) => {
  try {
    const { id } = req.params;
    res.json(await deleteComplex(id));
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const DELETE_ROOMS = async (req, res) => {
  try {
    const { id } = req.params;

    res.json(await deleteRooms(id));
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export {
  GET_COMPLEX1,
  GET_ROOMS,
  POST_COMPANY,
  DELETE_COMPANY,
  POST_COMPLEX,
  DELETE_COMPLEX,
  DELETE_ROOMS,
  POST_ROOMS,
};
