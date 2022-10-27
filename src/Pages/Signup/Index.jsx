import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import styles from "./sign.module.css";
// const baseURL = "http://localhost:8000/api/v1/signUp";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
const LoginSchema = Yup.object().shape({
  Name: Yup.string()
  .min(2, "Too Short!")
  .max(50, "Too Long!")
  .required("Name is required"),
 Number: Yup.string()
    .required("Phone number is required")
    .matches(
/^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
      "Invalid phone number"
    ),
    Address: Yup.string()
    .min(10, "Too Short!")
    .max(100, "Too Long!")
    .required("Address is required"),

  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),

  password: Yup.string()
    .min(6, "Password must be 6 characters at minimum")
    .required("Password is required"),
});
function App() {
  return (
    <div className={`${styles.bg}`}>
      <MDBContainer
        fluid
        className="d-flex align-items-center justify-content-center bg-image"
      >
        <div className="mask gradient-custom-3"></div>
        <MDBCard className="m-4 w-100 " style={{ maxWidth: "600px" }}>
          <MDBCardBody className="">
            <h4 className={`  card-header ${styles.h}`}>
              <b>Create an account</b>
            </h4>
            <Formik
              initialValues={{
                Name: "",
                Number: "",
                email: "",
                password: "",
                Gender: "",
                Address: "",
              }}
              validationSchema={LoginSchema}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ touched, errors, isSubmitting, values }) =>
                !isSubmitting ? (
                  <Form className="">
                    <div className="d-flex flex-row align-items-center ">
                      {/* <i className=""></i> */}
                      <div className="row">
                        <div className=" flex-fill  ">
                          <label>
                            {" "}
                            <b>Name</b>
                          </label>

                          <input
                        type="Name"
                        className="form-control"
                        placeholder=" Name"
                        name="Name"
                        className={`mt-2 form-control
${touched.Name && errors.Name ? "is-invalid" : ""}`}
                      />
                      <ErrorMessage
                        component="div"
                        name="Name"
                        className="invalid-feedback"
                      />
                        </div>
                      </div>
                      <div className="mx-4 my-2">
                        <label>
                          <b>Contact Number</b>{" "}
                        </label>
                        <Field
                          type="Number"
                          className="form-control"
                          placeholder="Contact Number"
                          name="number"
                          className={`mt-2 form-control
${touched.Number && errors.Number ? "is-invalid" : ""}`}
/>
<ErrorMessage
                        component="div"
                        name="Number"
                        className="invalid-feedback"
                      />
                        
                      </div>
                    </div>
                    <div className=" my-2">
                      <label>
                        <b>Email</b>{" "}
                      </label>
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
                    <div className=" my-2">
                      <label>
                        <b>Password</b>
                      </label>
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
                    <div className=" my-2">
                      <label>
                        <b>Address</b>{" "}
                      </label>
                      <input
                        type="TEXT"
                        className="form-control"
                        placeholder=" Address"
                        name="Address"
                        className={`mt-2 form-control
${touched.email && errors.email ? "is-invalid" : ""}`}
                      />
                      <ErrorMessage
                        component="div"
                        name="Address"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="mb-3  my-2">
                      <label>
                        <b>Gender</b>{" "}
                      </label>

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

                    <div className={`${styles.btt}`}>
                      <button type="btn" to="/" className="btn btn-dark">
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
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default App;
