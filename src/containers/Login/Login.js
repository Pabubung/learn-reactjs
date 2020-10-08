import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="container">
      {/* <div > */}
      <div className="row login__box">
        <div className="login__header">
          <h1>Welcome</h1>
        </div>
        <div className="login__description">
          <p>Masukkan username dan password anda</p>
        </div>
        <div className="login__div-input">
          <div className="form-username">
            <input type="text" equired autoComplete="off" />
            <label className="label-name">
              <span className="content-name">Username</span>
            </label>
          </div>

          <div>
            <label>Password</label>
            <input
              placeholder="Masukkan password"
              required
              autoComplete="off"
            />
          </div>
        </div>

        <div>
          <h5>Log In</h5>
          <h5>Sign In</h5>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Login;
