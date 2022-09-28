import React,{useState}from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(fname,lname,email,password)

  return (
    <div>
      <div className="card container w-25 p-3 my-5">
        <form >
          <h3>Sign Up</h3>
          <div className="  mb-3">
            <label>First name</label>
            <input  
              type="text"
              className="form-control"
              placeholder="First name"
              name="firstname"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
             
            />
          </div>
          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              name="lastname"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
             

            />
          </div>
          <div className="mb-3">
            <label>Email </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
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
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              

            />
          </div>
          <div className="d-grid">
            <button type="submit"  className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <Link to="/">Login in?</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
