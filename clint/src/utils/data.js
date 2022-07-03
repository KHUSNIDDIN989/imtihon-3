import axios from "axios";

const Company = (path) => {
  return axios.get(`http://localhost:9009/${path}`);
};

const Complex = (path, id) => {
  return axios.get(`http://localhost:9009/${path}/${id}`);
};
const Calc = (path, id, year) => {
  return axios.get(`http://localhost:9009/${path}?id=${id}&year=${year}`);
};

const Post = (path, name, img) => {
  return axios.post(`http://localhost:9009/${path}`, {
    name: name,
    img: img,
  });
};

const PostComplex = (path, name, address, select) => {
  return axios.post(`http://localhost:9009/${path}`, {
    name: name,
    address,
    id: select,
  });
};

const PostRooms = (path, name, address, kv, select) => {
  return axios.post(`http://localhost:9009/${path}`, {
    room: name,
    price: address,
    kv: kv,
    complex_id: select,
  });
};

const Auth1 = (path, login, password) => {
  return axios.post(`http://localhost:9009/${path}`, {
    login,
    password,
  });
};

const Delete = (path, id) => {
  return axios.delete(`http://localhost:9009/${path}/${id}`);
};

export { Company, Complex, Calc, Post, Delete, PostComplex, PostRooms, Auth1 };
