import { fetchData } from "../../utils/postgres.js";

const complex = `
SELECT 
    *
FROM complex;
`;

const room = `
SELECT 
    *
FROM 
    rooms
`;

const postcompany = `
INSERT INTO 
    companies(company_name, company_img) 
VALUES ($1, $2)
`;

const postcomplex = `
INSERT INTO 
    complex(complex_name, address, company_id) 
VALUES ($1, $2, $3)
`;

const postroom = `
INSERT INTO 
    rooms(room, price, kv, complex_id) 
VALUES ($1, $2,$3, $4)
`;

const deletecompany = `
DELETE FROM companies WHERE company_id = $1;
`;

const deletecomplex = `
DELETE FROM complex WHERE complex_id = $1;
`;

const deleteroom = `
DELETE FROM rooms WHERE room_id = $1;
`;

const getComplex = () => fetchData(complex);
const getRoom = () => fetchData(room);
const postCompany = (name, img) => fetchData(postcompany, name, img);
const postRoom = (room, price, kv, complex_id) =>
  fetchData(postroom, room, price, kv, complex_id);
const postComplex = (name, address, id) =>
  fetchData(postcomplex, name, address, id);
const deleteCompany = (id) => fetchData(deletecompany, id);
const deleteComplex = (id) => fetchData(deletecomplex, id);
const deleteRooms = (id) => fetchData(deleteroom, id);

export {
  getComplex,
  getRoom,
  postCompany,
  deleteCompany,
  postComplex,
  deleteComplex,
  deleteRooms,
  postRoom,
};
