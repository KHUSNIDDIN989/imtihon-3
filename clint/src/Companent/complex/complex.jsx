import React, { useEffect, useState } from "react";
import { Company, Delete, Post, PostComplex } from "../../utils/data";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../sidebar/sidebar";

const Complexs = () => {
  const [complexx, setComplexx] = useState([]);
  const [complex, setComplex] = useState([]);
  const [company, setCompany] = useState([]);
  const [res, setRes] = useState([]);

  useEffect(() => {
    Company("complex").then((data) => setComplexx(data.data));
    Company("companies").then((data) => setCompany(data.data));
  }, [res, complex]);

  const handlePost = (e) => {
    e.preventDefault();

    const { name, address, select } = e.target.elements;
    PostComplex("postcomplex", name.value, address.value, select.value).then(
      (data) => setRes(data.data)
    );
    e.target.reset();
  };

  const handleComplex = (e) => {
    Delete("deletecomplex", e).then((data) => setComplex(data.data));
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
              onSubmit={(e) => handlePost(e)}
            >
              <div className="w-50 px-3">
                <label htmlFor="basic-url" className="form-label fw-bold">
                  Complex name
                </label>
                <input
                  type="text"
                  className="form-control shadow"
                  name="name"
                  required
                />
              </div>
              <div className="w-50 px-3">
                <label htmlFor="basic-url" className="form-label fw-bold">
                  Complex address
                </label>
                <input
                  type="text"
                  className="form-control shadow"
                  name="address"
                  required
                />
              </div>
              <div className="w-50 px-3">
                <label htmlFor="basic-url" className="form-label fw-bold">
                  Companies
                </label>
                <select className="form-select shadow" name="select">
                  {company?.map((e) => (
                    <option value={e.company_id} key={e.company_id}>
                      {e.company_name}
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
                    <th scope="col">Complex name</th>
                    <th scope="col">Complex address</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {complexx.map((e, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{e.complex_name}</td>
                      <td>{e.address}</td>
                      <td className="fw-bold">
                        <button
                          className="btn btn-danger text-light  "
                          onClick={(e) => handleComplex(e.target.id)}
                          id={e.complex_id}
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

export default Complexs;
