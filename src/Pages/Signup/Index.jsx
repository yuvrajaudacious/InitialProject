import React, { useState } from "react";
import styles from "./sign.module.css";
import * as Yup from "yup";

const userLogin = Yup.object({
  name: Yup.string().required("Name is Required"),
  number: Yup.string().required("A phone number is required"),
  email: Yup.string().required("Email is required"),
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
  const [currentErrors, setCurrentErrors] = useState({});
  const [data, setData] = useState({});

  const runValidations = () => {
    userLogin
      .validate(userRegistration, { abortEarly: false })
      .then((responseData) => {
        console.log("no validation errors");
        console.log(responseData);
        setCurrentErrors({});
      })
      .catch((currentErrors) => {
        console.log(currentErrors);
        console.log(currentErrors.name, "hgjhh "); // ValidationError
        console.log(currentErrors.errors, "errrrrorrrrr");
        setCurrentErrors({
          name: currentErrors.errors[0],
          number: currentErrors.errors[1],
          email: currentErrors.errors[2],
          password: currentErrors.errors[3],
          address: currentErrors.errors[4],
          gender: currentErrors.errors[5],
        });
      });
  };
  console.log(currentErrors);
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
      <section class="card">
        <div class="container ">
          <div class="row d-flex justify-content-center align-items-center ">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black">
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form
                        class="mx-1 mx-md-4"
                        onSubmit={handleSubmit}
                        initialValue={{ userRegistration }}
                      >
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label namefor="inputemail4">Name</label>
                            <input
                              name="name"
                              class="form-control"
                              id="inputnamel4"
                              placeholder="name"
                              onChange={handleInput}
                            />
                            <p style={{ color: "red" }}>{currentErrors.name}</p>{" "}
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label for="inputemail4">Number</label>
                            <input
                              name="number"
                              class="form-control"
                              id="inputnumber4"
                              placeholder="number"
                              onChange={handleInput}
                            />
                            <p style={{ color: "red" }}>
                              {currentErrors.number}
                            </p>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label for="inputemail4">Email</label>
                            <input
                              name="email"
                              class="form-control"
                              id="inputemail4"
                              placeholder="email"
                            />
                            <p style={{ color: "red" }}>
                              {currentErrors.email}
                            </p>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label for="inputpassword4">Password</label>
                            <input
                              name="password"
                              class="form-control"
                              id="inputpassword4"
                              placeholder="password"
                              onChange={(e) =>
                                changeValue("password", e.target.value)
                              }
                            />
                            <p style={{ color: "red" }}>
                              {currentErrors.password}
                            </p>
                          </div>
                        </div>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label for="inputaddress">Address</label>
                            <input
                              name="address"
                              class="form-control"
                              id="inputaddress"
                              placeholder="1234 Main St"
                              onChange={handleInput}
                            />
                            <p style={{ color: "red" }}>
                              {currentErrors.address}
                            </p>
                          </div>
                        </div>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
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
                            <p style={{ color: "red" }}>
                              {currentErrors.gender}
                            </p>
                          </div>
                        </div>

                        <div class="form-check d-flex justify-content-center mb-5">
                          <input
                            class="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                          />
                          <label class="form-check-label" for="form2Example3">
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            onClick={runValidations}
                            type="button"
                            class="btn btn-primary"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>

                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        class="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
