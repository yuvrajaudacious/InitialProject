import { useState } from "react";
import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
// import { BsFillPersonPlusFill } from "react-icons/bs";
import styles from "./styles.module.css";
import { BsDoorOpen } from "react-icons/bs";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    console.log(email, password);
  };
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
      <div className={`${styles.body}`}>
        <section className="vh-100">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-xl-10">
                <div className="card">
                  <div className="row g-0">
                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                        alt="login form"
                        className="img-fluid"
                      />
                    </div>

                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                      <div className="card-body p-4 p-lg-5 text-black">
                        <div className={`${styles.well}`}>
                          <img
                            src="https://png.monster/wp-content/uploads/2022/03/png.monster-35-370x165.png"
                            alt="login form"
                            className="img-fluid"
                          />
                        </div>
                        <Formik
                          initialValues={{ email: "", password: "", name: "" }}
                          validationSchema={LoginSchema}
                          onSubmit={(values) => {
                            console.log(values);
                          }}
                        >
                          {({ touched, errors, isSubmitting, values }) =>
                            !isSubmitting ? (
                              <Form>
                                <h2 className="container">
                                  <b>Login Account</b>
                                </h2>

                                <div className="mb-3">
                                  <label>
                                    <b>Email</b>{" "}
                                  </label>
                                  <Field
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter email"
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
                                  <label>
                                    <p>Password</p>
                                  </label>
                                  <Field
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter password"
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

                                <div className={`${styles.log}`}>
                                  <button
                                    onClick={onLogin}
                                    className={`btn btn-dark btn-lg btn-block ${styles.log}`}
                                    type="button"
                                  >
                                    Login
                                  </button>
                                </div>
                                <Link
                                  className={`  small text-muted ${styles.forget}`}
                                  to="Forget"
                                >
                                  Forgot password?
                                </Link>
                                <p className={`${styles.crete}`}>
                                  <Link className="text-info" to="/signup">
                                    <b> Create New Account </b>
                                  </Link>
                                </p>
                              </Form>
                            ) : (
                              <div></div>
                            )
                          }
                        </Formik>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
