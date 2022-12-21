import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import styles from "./sign.module.css";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required"),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .min(10, "Phone numberis too short - should be 10 chars minimum"),

  email: Yup.string().email("Invalid email").required(" Email is Required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password is too short - should be 6 chars minimum"),
  address: Yup.string()
    .min(2, "Too Short!")
    .max(100, "Too Long!")
    .required("Address is required"),
  gender: Yup.string().required("shssjhda"),
});

const Index = () => {
  return (
    <div className={`vh-190 ${styles.bg}`}>
      <section class="vh-190">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black">
                <div class={`card-body p-md- ${styles.b}`}>
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      <img
                      src="https://www.freeiconspng.com/thumbs/sign-up-button-png/sign-up-button-png-2.png"
                      class="img-fluid"
                      alt="Sample image"
                    />                      </p>
                      <Formik
                        initialValues={{
                          name: "",
                          phoneNumber: "",
                          email: "",
                          password: "",
                          address: "",
                          gender: "",
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={(values) => {
                          console.log(values);
                        }}
                      >
                        {({ errors, touched }) => (
                          <Form class="mx-1 mx-md-4">
                            <div class="d-flex flex-row align-items-center mb-4">
                              <div class="form-outline flex-fill mb-0">
                                <label class="form-label"><b>Name</b></label>
                                <Field class="form-control" name="name" />
                                {errors.name && touched.name ? (
                                  <div style={{ color: "red" }}>
                                    {errors.name}
                                  </div>
                                ) : null}
                              </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                              <div class="form-outline flex-fill mb-0">
                                <label class="form-label"><b>Phone Number</b></label>
                                <Field
                                  class="form-control"
                                  name="phoneNumber"
                                  type="phoneNumber"
                                />
                                {errors.phoneNumber && touched.phoneNumber ? (
                                  <div style={{ color: "red" }}>
                                    {errors.phoneNumber}
                                  </div>
                                ) : null}
                              </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                              <div class="form-outline flex-fill mb-0">
                                <label class="form-label"><b>Email</b></label>

                                <Field
                                  class="form-control"
                                  name="email"
                                  type="email"
                                />
                                {errors.email && touched.email ? (
                                  <div style={{ color: "red" }}>
                                    {errors.email}
                                  </div>
                                ) : null}
                              </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                              <div class="form-outline flex-fill mb-0">
                                <label class="form-label"><b>Password</b></label>
                                <Field
                                  class="form-control"
                                  type="password"
                                  name="password"
                                />
                                {errors.password && touched.password ? (
                                  <div style={{ color: "red" }}>
                                    {errors.password}
                                  </div>
                                ) : null}
                              </div>
                            </div>
                            <div class="d-flex flex-row align-items-center mb-4">
                              <div class="form-outline flex-fill mb-0">
                                <label class="form-label"><b>Address</b></label>
                                <Field
                                  class="form-control"
                                  type="address"
                                  name="address"
                                />
                                {errors.address && touched.address ? (
                                  <div style={{ color: "red" }}>
                                    {errors.address}
                                  </div>
                                ) : null}
                              </div>
                            </div>
                            <div class="d-flex flex-row align-items-center mb-4">
                              <div class="form-outline flex-fill mb-0">
                                <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">
                                  <label class="mb-0 me-4"><b>Gender: </b></label>

                                  <div class="form-check form-check-inline mb-0 me-4">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      name="inlineRadioOptions"
                                      id="femaleGender"
                                      value="option1"
                                    />
                                    <label
                                      class="form-check-label"
                                      for="femaleGender"
                                    >
                                      Female
                                    </label>
                                  </div>

                                  <div class="form-check form-check-inline mb-0 me-4">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      name="inlineRadioOptions"
                                      id="maleGender"
                                      value="option2"
                                    />
                                    <label
                                      class="form-check-label"
                                      for="maleGender"
                                    >
                                      Male
                                    </label>
                                  </div>

                                  <div class="form-check form-check-inline mb-0">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      name="inlineRadioOptions"
                                      id="otherGender"
                                      value="option3"
                                    />
                                    <label
                                      class="form-check-label"
                                      for="otherGender"
                                    >
                                      Other
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="d-flex  mx-  ">
                              <button
                                type="submit"
                                className={`btn btn-dark btn-lg btn-block ${styles.btt}`}
                              >
                                Sign in
                              </button>
                            </div>
                            <Link  className={`mx-1 text-info ${styles.al}`}  to="/">
                              <b>Already Login </b>
                            </Link>
                          </Form>
                        )}
                      </Formik>
                    </div>
                  <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
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
    </div>
  );
};

export default Index;
