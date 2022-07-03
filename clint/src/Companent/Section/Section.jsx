import React, { useState, useEffect } from "react";
import { Calc, Company, Complex } from "../../utils/data";
import "./Section.css";
const Section = () => {
  const [data, setData] = useState([]);
  const [complex, setComplex] = useState([]);
  const [complex1, setComplex1] = useState([]);
  const [room, setRoom] = useState([]);
  const [bank, setBank] = useState([]);
  const [value, setValue] = useState([]);
  const [calc, setCalc] = useState([]);
  const [id, setId] = useState(1);
  useEffect(() => {
    Company("companies").then((data) => setData(data.data));
  }, []);

  const hendleID = (e) => {
    Complex("company", e.target.value).then((data) => setComplex(data.data));
  };

  const handleComplex = (e) => {
    Complex("complex", e.target.value).then((data) => setComplex1(data.data));
  };

  const handleRoom = (e) => {
    Complex("room", e.target.value).then((data) => setRoom(data.data));
    Complex("bank", e.target.value).then((data) => setBank(data.data));
    setId(e.target.value);
  };

  const handleCalc = (e) => {
    Calc("calc", id, e).then((data) => setCalc(data.data));
  };

  return (
    <div className="container my-5">
      <h2 className="text-center fs-1 fw-bolder text-light ">
        Choose a house by filtering
      </h2>
      <div className="card mt-4">
        <div className="form-control d-flex pt-4">
          <div className="input-group mb-3 flex-column mx-3">
            <label
              htmlFor="inputGroupSelect04"
              className="form-label text-center fw-bold text-secondary"
            >
              Building company:
            </label>
            <select
              className="form-select w-100 rounded bg-primary text-light"
              id="inputGroupSelect03"
              aria-label="Example select with button addon"
              onClick={(e) => hendleID(e)}
            >
              {data?.map((e) => (
                <option key={e.company_id} value={e.company_id}>
                  {e.company_name}
                </option>
              ))}
            </select>
          </div>
          <div className="input-group mb-3 flex-column mx-3">
            <label
              htmlFor="inputGroupSelect04"
              className="form-label text-center fw-bold text-secondary"
            >
              Complex:
            </label>
            <select
              className="form-select w-100 rounded bg-primary text-light"
              id="inputGroupSelect03"
              aria-label="Example select with button addon"
              onClick={(e) => handleComplex(e)}
            >
              <option value="">Choose..</option>
              {complex?.map((e) =>
                e.complex?.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))
              )}
            </select>
          </div>
          <div className="input-group mb-3 flex-column mx-3 ">
            <label
              htmlFor="inputGroupSelect04"
              className="form-label text-center fw-bold text-secondary"
            >
              Number of rooms:
            </label>
            <select
              className="form-select w-100 rounded bg-primary text-light"
              id="inputGroupSelect03"
              aria-label="Example select with button addon"
              onChange={(e) => handleRoom(e)}
            >
              <option>Choose...</option>
              {complex1?.map((e) =>
                e.room?.map((r) => (
                  <option value={r.room_id} key={r.room_id}>
                    {r.room}
                  </option>
                ))
              )}
            </select>
          </div>
          <div className="input-group mb-3 flex-column mx-3 ">
            <label
              htmlFor="inputGroupSelect04"
              className="form-label text-center fw-bold text-secondary"
            >
              Mortgage duration:
            </label>
            {
              <select
                className={`form-select w-100 rounded bg-primary text-light   ${
                  room.length == 0 ? "disabled" : null
                }`}
                id="inputGroupSelect04"
                aria-label="Example select with button addon"
                onChange={(e) => {
                  handleCalc(e.target.value);
                  setValue(e.target.value);
                }}
              >
                <option>Choose...</option>
                <option value="10">10 year</option>
                <option value="15">15 year</option>
                <option value="20">20 year</option>
              </select>
            }
          </div>
        </div>
      </div>
      {complex.length ? (
        <div className="card mt-4 p-4 d-flex">
          <div className="row  ">
            <div className="col-4 d-flex justify-content-center flex-column">
              {complex?.map((e) => (
                <div key={e.company_id}>
                  <div className="w-100 d-flex justify-content-center">
                    <img
                      src={e.company_img}
                      alt=""
                      className="img-fluid"
                      width={200}
                    />
                  </div>
                  <h2 className="text-center fw-bold m-0 p-0">
                    {e.company_name}
                  </h2>
                </div>
              ))}
              {complex1?.map((e) => (
                <h3 className="text-center fw-bold m-0" key={e.complex_id}>
                  {e.complex_name}
                </h3>
              ))}
              {room?.map((e) => (
                <div key={e.room_id}>
                  <h3 className="text-center m-0">{e.room} rooms</h3>
                  <p className="text-center fw-bold m-0">
                    {e.price} so'm each meter square
                  </p>
                  <p className="text-center fw-bold m-0">
                    {e.kv} meters square
                  </p>
                  <p className="text-center fw-bold m-0">{e.address}</p>
                </div>
              ))}
            </div>
            {value.length ? (
              <>
                <div className="col-4 d-flex justify-content-center flex-column">
                  {bank?.map((e) => (
                    <div key={e.bank_id}>
                      <div className="p-5">
                        <img src={e.bank_img} alt="" className="img-fluid" />
                      </div>
                      <h3 className="fw-bold text-center">{e.bank_name}</h3>
                      <h4 className="fw-bold text-center">
                        {e.limit_cost} so'm upto
                      </h4>
                      <p className="fw-bold text-center m-0">
                        Mortage duration: {value} year
                      </p>
                      <h4 className="fw-bold text-center">
                        Starting paymant: {e.started_paymant} %
                      </h4>
                      <h3 className="fw-bold text-center">{value} year</h3>
                    </div>
                  ))}
                </div>
                <div className="col-4">
                  {calc?.map((e) => (
                    <div className="w-100 h-100 d-flex justify-content-center align-items-center flex-column">
                      <h3 className="text-center fw-bold">Calculator</h3>
                      <h5 className="text-center fw-bold">
                        House Price: {e.price}
                      </h5>
                      <h5 className="text-center fw-bold">
                        Starting Payment: {e.starting_payment}
                      </h5>
                      <h6 className="text-center fw-bold">
                        Monthly Payment: {e.monthly_payment.slice(".", 10)}
                      </h6>
                      <h6 className="text-center fw-bold">
                        Bank Service: 2.5 million
                      </h6>
                      <h6 className="text-center fw-bold">
                        Payment duration: {e.bank_duration} year
                      </h6>
                    </div>
                  ))}
                </div>
              </>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Section;
