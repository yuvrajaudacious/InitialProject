import React, { useState } from "react";
import styles from "./sign.module.css";
import * as Yup from "yup";

const userLogin = Yup.object({
  name: Yup.string()
  .required("Name is Required"),
  number: Yup.number()
  .required('A phone number is required'),
  email: Yup.string()
  .email("")
  .required("Email is required"),
  password: Yup.string().required("Password is Required"),
  address: Yup.string().required("Address is Required"),
  gender: Yup.string().required("gender is Required"),
});

const Signup = () => {
  const [userRegistration, setUserRegistration] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
    address: "",
    gender: "",
  });
  const [currentErrors, setCurrentErrors] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
    address: "",
    gender: "",
  });
  const [data, setData] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
    address: "",
    gender: "",
  });

  const runValidations = () => {
    userLogin
      .validate(userRegistration, { abortEarly: false })
      .then((responseData) => {
        console.log("no validation errors");
        console.log(responseData);
        setCurrentErrors({
        name: "",
        number: "",
        email: "",
        password: "",
        address: "",
        gender: "",
      });
      })
      .catch((currentErrors) => {
        console.log(currentErrors);
        console.log(currentErrors.name, "hgjhh "); // ValidationError
        console.log(currentErrors.errors, "errrrrorrrrr");
        setCurrentErrors({
          name: currentErrors.errors[0],
          number:currentErrors.errors[1],
          email: currentErrors.errors[2],
          password:currentErrors.errors[3],
          address:currentErrors.errors[4],
          gender:currentErrors.errors[5],


        });
      
      });
  };
 console.log(
  currentErrors
 );
  const changeValue = (field, val) => {
    const newData = { ...data };
    newData[field] = val;
    setData(newData);
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserRegistration({ ...userRegistration, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userRegistration);
  };
  return (
    <>
      <div classname="container">
        {/* <input type="datetime-local"
        ></input> */}
        <div className={`card ${styles.btt} `}>
          <form
            classname={` my-3 ${styles.h}`}
            onSubmit={handleSubmit}
            initialValue={{ userRegistration }}
          >
            <div class="form-row">
              <div class="form-group col-md-6">
                <label namefor="inputemail4">Name</label>
                <input
                  name="name"
                  class="form-control"
                  id="inputnamel4"
                  placeholder="name"
                  onChange={handleInput}
                />
              </div>
              <p style={{ color: "red" }}>{currentErrors.name}</p>

              <div class="form-group col-md-6">
                <label for="inputemail4">Number</label>
                <input
                  name="number"
                  class="form-control"
                  id="inputnumber4"
                  placeholder="number"
                  onChange={handleInput}
                />
              <p style={{ color: "red" }}>{currentErrors.number}</p>
              </div>


              <div class="form-group col-md-6">
                <label for="inputemail4">Email</label>
                <input
                  name="email"
                  class="form-control"
                  id="inputemail4"
                  placeholder="email"
                />
               <p style={{ color: "red" }}>{currentErrors.email}</p>

              </div>
              
              
              
              <div class="form-group col-md-6">
                <label for="inputpassword4">Password</label>
                <input
                  name="password"
                  class="form-control"
                  id="inputpassword4"
                  placeholder="password"
                  onChange={(e) => changeValue("password", e.target.value)}
                />
                 <p style={{ color: "red" }}>{currentErrors.password}</p>
              </div>
            </div>
            <div class="form-group">
              <label for="inputaddress">Address</label>
              <input
                name="address"
                class="form-control"
                id="inputaddress"
                placeholder="1234 Main St"
                onChange={handleInput}
              />
                 <p style={{ color: "red" }}>{currentErrors.address}</p>
            </div>

            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="inputState">Gender</label>
                <select
                  name="gender"
                  id="inputState"
                  class="form-control"
                  onChange={handleInput}
                >
                  <option selected>Choose</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>other</option>
                </select>
                <p style={{ color: "red" }}>{currentErrors.gender}</p>

              </div>
            </div>
            <button
              onClick={runValidations}
              type="button"
              class="btn btn-primary"
            >
              Submit
            </button>
           
          </form>
        </div>
      </div>
      <button className="scrollToTop" aria-label="Scroll back to top"></button>
    </>
  );
};

export default Signup;
