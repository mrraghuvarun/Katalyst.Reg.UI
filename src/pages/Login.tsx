import React, { useState, FormEvent } from "react";
import "./Login.css";
import logo from "../assets/logo.png";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log({
      username,
      password,
      rememberMe,
    });
    // Redirect logic
    window.location.href = "/summary";
  };

  return (
    <div className="auth">
      <div className="row h-100">
        <div className="col-lg-5 col-12">
          <div className="auth-left">
            <div className="auth-logo">
              <a href="/">
                <img src={logo} alt="Logo" />
              </a>
            </div>
            <h1 className="auth-title">Log in.</h1>
            <p className="auth-subtitle mb-5">
              Log in with your data that you entered during registration.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <div className="form-icon">
                  <box-icon name="user"></box-icon>
                </div>
              </div>
              <div className="form-group mb-4">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="form-icon">
                  <box-icon name="shield"></box-icon>
                </div>
              </div>
              <div className="form-check d-flex align-items-center">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  id="rememberMe"
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Keep me logged in
                </label>
              </div>
              <button className="btn btn-primary btn-block mt-5">Log in</button>
            </form>
            <div className="text-center mt-5">
              <p>
                Don't have an account?{" "}
                <a href="/auth-register" className="font-bold">
                  Sign up
                </a>
                .
              </p>
              <p>
                <a className="font-bold" href="/auth-forgot-password">
                  Forgot password?
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-7 d-none d-lg-block auth-right"></div>
      </div>
    </div>
  );
};

export default Login;
