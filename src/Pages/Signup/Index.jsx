import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import styles from "./sign.module.css";

const Signup = () => {
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be 6 characters at minimum")
      .required("Password is required"),
  });
  return (
    <>
      <section className="bg-succsse vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className={`card text-black ${styles.border_radius}`}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>
                      <Formik
                initialValues={{ email: "", password: ""}}
                validationSchema={LoginSchema}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {({ touched, errors, isSubmitting, values }) =>
                  !isSubmitting ? (
                     
                    <Form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
    {/* <i className=""></i> */}
    <div className="form-outline flex-fill mb-0">
                        <label> <b>Name</b></label>
                        
                        <input
                          type="name"
                          className="form-control"
                          placeholder="  Name"
                          name="name"
                          className={`mt-2 form-control
                          ${touched.email && errors.email ? "is-invalid" : ""}`}
                        />
                        <ErrorMessage
                          component="div"
                          name=" name"
                          className="invalid-feedback"
                        />
                      </div>
                      </div>
                      <div className="mb-3">
                        <label><b>Contact Number</b> </label>
                        <input
                          type="Number"
                          className="form-control"
                          placeholder= "Contact Number"
              
                          name="number"
                          className={`mt-2 form-control
                          ${touched.email && errors.email ? "is-invalid" : ""}`}
                        />
                      </div>
                      <div className="mb-3">
                        <label><b>Email</b> </label>
                        <Field
                          type="email"
                          className="form-control"
                          placeholder=" Email"
                          name="email"
                          className={`mt-2 form-control
						${touched.email && errors.email ? "is-invalid" : ""}`}
                        />
                        <ErrorMessage
                          component="div"
                          name="email"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="mb-3">
                        <label><b>Password</b></label>
                        <Field
                          type="password"
                          className="form-control"
                          placeholder=" Password"
                          name="password"
                          className={`mt-2 form-control
						${touched.password && errors.password ? "is-invalid" : ""}`}
                        />
                        <ErrorMessage
                          component="div"
                          name="password"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="mb-3">
                        <label><b>Address</b> </label>
                        <input
                          type="TEXT"
                          className="form-control"
                          placeholder=" Address"
              
                          name="Address"
                          className={`mt-2 form-control
                          ${touched.email && errors.email ? "is-invalid" : ""}`}
                        />
                      </div>
                      <div className="mb-3">
                        <label><b>Gender</b> </label>

                        <select
                          className="form-select"
                          aria-label="Default select example"
                          className={`mt-2 form-control
                          ${touched.email && errors.email ? "is-invalid" : ""}`}
                        >
                          <option selected> Select Gender</option>
                          <option value="1">Male</option>
                          <option value="2">female</option>
                          <option value="3">other</option>
                        </select>
                      </div>

                      <div className="d-grid">
                        <button  type="btn" to="/" className="btn btn-primary">
                          Sign Up
                        </button>
                      </div>
                      <p className="forgot-password text-right my-3">
                        Already registered <Link to="/">Login in?</Link>
                      </p>
                    </Form>
                  ) : (
                    <div></div>
                  )
                }
              </Formik>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
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