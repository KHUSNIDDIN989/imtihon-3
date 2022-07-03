import React from "react";
import { Auth1 } from "../../utils/data";

const Auth = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const { login, password } = e.target.elements;
    Auth1("auth", login.value, password.value).then((data) =>
      console.log(data.data)
    );
  };

  return (
    <div className="auth ">
      <form
        action=""
        className="form-control w-50 h-50 shadow d-flex flex-column justify-content-center "
        onSubmit={(e) => handleLogin(e)}
      >
        <h2 className="fw-bold"> Login</h2>
        <input
          type="text"
          className="form-control my-3"
          defaultValue="admin"
          name="login"
        />
        <input
          type="password"
          className="form-control my-3"
          defaultValue="1"
          name="password"
        />
        <button className="btn btn-primary mb-4">Submit</button>
      </form>
    </div>
  );
};

export default Auth;
