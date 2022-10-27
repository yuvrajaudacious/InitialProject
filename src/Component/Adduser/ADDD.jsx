// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// // import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// function WithHeaderExample() {
//   return (
//     <Card className=' container card w-50 my-5 ' >
//       <Card.Header>Featured</Card.Header>
//       <Card.Body>
//         <Card.Title>Special title treatment</Card.Title>
//         <Card.Text>
//         <Form> 
//         <Row className="mb-3 mx-2 my-3">
//           <Form.Group as={Col} controlId="formGridName">
//             <Form.Label>Name</Form.Label>
//             <Form.Control type="Name" placeholder="Enter Name" />
//           </Form.Group>

//           <Form.Group as={Col} controlId="formGridPassword">
//             <Form.Label>Contact Number</Form.Label>
//             <Form.Control type="number" placeholder="Number" />
//           </Form.Group>
//         </Row>

//         <Form.Group className="mb-2  mx-3 my-3" controlId="formGridemail">
//           <Form.Label>Email</Form.Label>
//           <Form.Control placeholder="@gmail.com" />
//         </Form.Group>

//         <Form.Group className="mb-3  mx-3 my-3" controlId="formGridAddres">
//           <Form.Label>Address </Form.Label>
//           <Form.Control placeholder="Apartment, studio, or floor" />
//         </Form.Group>
//         <Form.Group className="mb-3  mx-3 my-3" controlId="formGridAddres">
//           <Form.Label>Gender</Form.Label>

//           <Form.Select aria-label="Default select example">
//             <option>Select Gender</option>
//             <option value="1">Male</option>
//             <option value="2">Female</option>
//             <option value="3">Other</option>
//           </Form.Select>
//         </Form.Group>
//         <Form.Group className="mb-3  mx-3 my-3" id="formGridCheckbox">
//           <Form.Check type="checkbox" label="Check me out" />
//         </Form.Group>

//         <Button variant="primary" size="sm">
//           Submit
//         </Button>
//       </Form>
//         </Card.Text>
        
//       </Card.Body>
//     </Card>
//   );
// }

// export default WithHeaderExample;
// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { Link } from "react-router-dom";
// import styles from "./sign.module.css";

// import {
//   MDBBtn,
//   MDBContainer,
//   MDBCard,
//   MDBCardBody,
//   MDBInput,
//   MDBCheckbox,
// } from "mdb-react-ui-kit";
// const LoginSchema = Yup.object().shape({
//   email: Yup.string()
//     .email("Invalid email address format")
//     .required("Email is required"),
//   password: Yup.string()
//     .min(6, "Password must be 6 characters at minimum")
//     .required("Password is required"),
// });
// function App() {
//   return (
//     <div className={`${styles.bg}`}>
//       <MDBContainer
//         fluid
//         className="d-flex align-items-center justify-content-center bg-image"
//       >
//         <div className="mask gradient-custom-3"></div>
//         <MDBCard className="m-4 w-75" style={{ maxWidth: "400px" }}>
//           <MDBCardBody className=''>
//             <h4 className=  {`  card-header ${styles.h}`}>
//               <b>Create an account</b>
//             </h4>
//             <Formik
//               initialValues={{ email: "", password: "" }}
//               validationSchema={LoginSchema}
//               onSubmit={(values) => {
//                 console.log(values);
//               }}
//             >
//               {({ touched, errors, isSubmitting, values }) =>
//                 !isSubmitting ? (
//                   <Form className="">
//                     <div className="d-flex flex-row align-items-center ">
//                       {/* <i className=""></i> */}
//                       <div className=" flex-fill ">
//                         <label>
//                           {" "}
//                           <b>Name</b>
//                         </label>

//                         <input
//                           type="name"
//                           className="form-control"
//                           placeholder="  Name"
//                           name="name"
//                           className={`mt-2 form-control
// ${touched.email && errors.email ? "is-invalid" : ""}`}
//                         />
//                         <ErrorMessage
//                           component="div"
//                           name=" name"
//                           className="invalid-feedback"
//                         />
//                       </div>
//                     </div>
//                     <div className="">
//                       <label>
//                         <b>Contact Number</b>{" "}
//                       </label>
//                       <input
//                         type="Number"
//                         className="form-control"
//                         placeholder="Contact Number"
//                         name="number"
//                         className={`mt-2 form-control
// ${touched.email && errors.email ? "is-invalid" : ""}`}
//                       />
//                     </div>
//                     <div className="">
//                       <label>
//                         <b>Email</b>{" "}
//                       </label>
//                       <Field
//                         type="email"
//                         className="form-control"
//                         placeholder=" Email"
//                         name="email"
//                         className={`mt-2 form-control
// ${touched.email && errors.email ? "is-invalid" : ""}`}
//                       />
//                       <ErrorMessage
//                         component="div"
//                         name="email"
//                         className="invalid-feedback"
//                       />
//                     </div>
//                     <div className="">
//                       <label>
//                         <b>Password</b>
//                       </label>
//                       <Field
//                         type="password"
//                         className="form-control"
//                         placeholder=" Password"
//                         name="password"
//                         className={`mt-2 form-control
// ${touched.password && errors.password ? "is-invalid" : ""}`}
//                       />
//                       <ErrorMessage
//                         component="div"
//                         name="password"
//                         className="invalid-feedback"
//                       />
//                     </div>
//                     <div className="">
//                       <label>
//                         <b>Address</b>{" "}
//                       </label>
//                       <input
//                         type="TEXT"
//                         className="form-control"
//                         placeholder=" Address"
//                         name="Address"
//                         className={`mt-2 form-control
// ${touched.email && errors.email ? "is-invalid" : ""}`}
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label>
//                         <b>Gender</b>{" "}
//                       </label>

//                       <select
//                         className="form-select"
//                         aria-label="Default select example"
//                         className={`mt-2 form-control
// ${touched.email && errors.email ? "is-invalid" : ""}`}
//                       >
//                         <option selected> Select Gender</option>
//                         <option value="1">Male</option>
//                         <option value="2">female</option>
//                         <option value="3">other</option>
//                       </select>
//                     </div>

//                     <div className="d-grid">
//                       <button type="btn" to="/" className="btn btn-dark">
//                         Sign Up
//                       </button>
//                     </div>
//                     <p className="forgot-password text-right my-3">
//                       Already registered <Link to="/">Login in?</Link>
//                     </p>
//                   </Form>
//                 ) : (
//                   <div></div>
//                 )
//               }
//             </Formik>
//           </MDBCardBody>
//         </MDBCard>
//       </MDBContainer>
//     </div>
//   );
// }

// export default App;
