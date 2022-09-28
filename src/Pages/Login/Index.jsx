import { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    console.log(email, password);

  };
 

  return (
    <div>
      <div className="card container w-25 p-3 my-5 mt-5 ">
        <form >
          <h3>Login </h3>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control" 
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid">
            <button
              type="submit"
              onClick={onLogin}
              to="/dashboard"
              className="btn btn-primary"
            >
              Login
            </button>
          </div>
          <p className="forgot-password text-right">
            Registration <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
