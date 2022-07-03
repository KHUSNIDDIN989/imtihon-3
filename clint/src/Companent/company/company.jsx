import React, { useEffect, useState } from "react";
import { Company, Delete, Post } from "../../utils/data";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../sidebar/sidebar";

const Companys = () => {
  const [company, setCompany] = useState([]);
  const [res, setRes] = useState([]);
  const [del, setDel] = useState([]);

  useEffect(() => {
    Company("companies").then((data) => setCompany(data.data));
  }, [res, del]);

  const data = (e) => {
    e.preventDefault();
    const { name, file } = e.target.elements;
    Post("postcompany", name.value, file.files[0]).then((data) =>
      setRes(data.data)
    );
    e.target.reset();
  };

  const handleDelete = (e) => {
    console.log(e);
    Delete("delete", e).then((data) => setDel(data.data));
  };
  console.log(res);
  return (
    <div>
      <Navbar />
      <div className="row">
        <Sidebar />
        <div className="col-10 p-5">
          <div className="card bg-info p-4">
            <form
              action=""
              className="form-control d-flex p-4"
              onSubmit={(e) => data(e)}
            >
              <div className="w-50 px-3">
                <label htmlFor="basic-url" className="form-label fw-bold">
                  Company name
                </label>
                <input
                  type="text"
                  className="form-control shadow"
                  name="name"
                />
              </div>
              <div className="w-50 px-3">
                <label htmlFor="basic-url" className="form-label fw-bold">
                  Company img
                </label>
                <input
                  type="file"
                  className="form-control shadow"
                  name="file"
                />
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
                    <th scope="col">Company name</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {company.map((e, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{e.company_name}</td>
                      <td className="fw-bold">
                        <button
                          className="btn btn-danger text-light  "
                          onClick={(e) => handleDelete(e.target.id)}
                          id={e.company_id}
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

export default Companys;
