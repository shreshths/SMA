import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "admin@example.com",
    password: "password",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = credentials;
    if (!email || !password) {
      setError("Please fill all the fields");
      return;
    }

    if (email === "admin@example.com" && password === "password") {
      navigate("/students");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div
      className="container"
      style={{ marginTop: "110px", marginBottom: "50px" }}
    >
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Login</h2>
        </div>
        <div className="card-body">
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="alert alert-info">
            <p>Email: admin@example.com</p>
            <p>Password: password</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
