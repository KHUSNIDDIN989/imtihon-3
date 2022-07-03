import {
  getCompAll,
  getComp,
  getComplex,
  getRoom,
  getBank,
  getCalc,
} from "./model.js";

const GET_COMP_ALL = async (_, res) => {
  try {
    res.json(await getCompAll());
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const GET_COMP = async (req, res) => {
  try {
    const { id } = req.params;
    res.json(await getComp(id));
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const GET_COMPLEX = async (req, res) => {
  try {
    const { id } = req.params;

    res.json(await getComplex(id));
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const GET_ROOM = async (req, res) => {
  try {
    const { id } = req.params;

    res.json(await getRoom(id));
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const GET_BANK = async (req, res) => {
  try {
    const { id } = req.params;

    res.json(await getBank(id));
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const GET_CALC = async (req, res) => {
  try {
    const { id, year } = req.query;
    res.json(await getCalc(id, year));
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export { GET_COMP_ALL, GET_COMP, GET_COMPLEX, GET_ROOM, GET_BANK, GET_CALC };
