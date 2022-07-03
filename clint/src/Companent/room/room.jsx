import React, { useEffect, useState } from "react";
import { Company, Delete, PostRooms } from "../../utils/data";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../sidebar/sidebar";

const Room = () => {
  const [complex, setComplex] = useState([]);
  const [room, setRoom] = useState([]);
  const [roomDelete, setRoomDelete] = useState([]);
  const [res, setRes] = useState([]);

  useEffect(() => {
    Company("room").then((data) => setRoom(data.data));
    Company("complex").then((data) => setComplex(data.data));
  }, [roomDelete, res]);

  const createRoom = (e) => {
    e.preventDefault();

    const { name, price, kv, select } = e.target.elements;
    PostRooms("postroom", name.value, price.value, kv.value, select.value).then(
      (data) => setRes(data.data)
    );
    e.target.reset();
  };

  const handleRooms = (e) => {
    Delete("deleterooms", e).then((data) => setRoomDelete(data.data));
  };

  return (
    <div>
      <Navbar />
      <div className="row">
        <Sidebar />
        <div className="col-10 p-5">
          <div className="card bg-info p-4">
            <form
              action=""
              className="form-control d-flex p-4 my-3"
              onSubmit={(e) => createRoom(e)}
            >
              <div className="w-50 px-3">
                <label htmlFor="basic-url" className="form-label fw-bold">
                  Room
                </label>
                <input
                  type="number"
                  className="form-control shadow"
                  name="name"
                />
              </div>
              <div className="w-50 px-3">
                <label htmlFor="basic-url" className="form-label fw-bold">
                  Price
                </label>
                <input
                  type="number"
                  className="form-control shadow"
                  name="price"
                />
              </div>
              <div className="w-50 px-3">
                <label htmlFor="basic-url" className="form-label fw-bold">
                  kv
                </label>
                <input
                  type="number"
                  className="form-control shadow"
                  name="kv"
                />
              </div>
              <div className="w-50 px-3">
                <label htmlFor="basic-url" className="form-label fw-bold">
                  Complex
                </label>
                <select className="form-select shadow" name="select">
                  {complex?.map((c) => (
                    <option key={c.complex_id} value={c.complex_id}>
                      {c.complex_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-25 px-4 mt-2">
                <button className="btn btn-primary w-100 mt-4 shadow">
                  Submit
                </button>
              </div>
            </form>

            <div className="card mt-4">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">House Rooms</th>
                    <th scope="col">House Price</th>
                    <th scope="col">House Square</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {room.map((e, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>Room {e.room}</td>
                      <td>Price {e.price}</td>
                      <td>Meters square {e.kv}</td>
                      <td className="fw-bold">
                        <button
                          className="btn btn-danger text-light  "
                          onClick={(e) => handleRooms(e.target.id)}
                          id={e.room_id}
                        >
                          &#9747;
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
