import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import styles from "./add.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Add() {
  const [email, setEmail] = useState();
  const [password, setpassword] = useState();

  const onSubmit = () => {
    console.log(email, password);
  };
  return (
    <>
    <section class="h-100 h-custom" style="background-color: #8fc4b7;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-8 col-xl-6">
        <div class="card rounded-3">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
            class="w-100" style="border-top-left-radius: .3rem; border-top-right-radius: .3rem;"
            alt="Sample photo">
          <div class="card-body p-4 p-md-5"></div>
          <div className={`${styles.bg}`}>

      <div>
        <div className={` container card w-50  my-  ${styles.wi}`}>
          <div class={`card-header ${styles.h}`}>
            <h2 className=" mx-3 my-1 w-5 " style={{ color: "" }}>
              Add User{" "}
            </h2>
          </div>
          <Form>
            <Row className="mb-3 mx-2 my-3">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="Name" placeholder="Enter Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control type="number" placeholder="Number" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-2  mx-3 my-3" controlId="formGridemail">
              <Form.Label>Email</Form.Label>
              <Form.Control placeholder="@gmail.com" />
            </Form.Group>

            <Form.Group className="mb-3  mx-3 my-3" controlId="formGridAddres">
              <Form.Label>Address </Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>
            <Form.Group className="mb-3  mx-3 my-3" controlId="formGridAddres">
              <Form.Label>Gender</Form.Label>

              <Form.Select aria-label="Default select example">
                <option>Select Gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Other</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3  mx-3 my-3"
              id="formGridCheckbox"
            ></Form.Group>
            <Form.Group className="mb-3  mx-3 my-3" id="formGridCheckbox">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control type="file" size="sm" />
            </Form.Group>

            <Button
              onClick={onSubmit}
              className={`w-25 ${styles.bt}`}
              variant="dark"
            >
              Submit
            </Button>
            <Button className={`  bg-light  ${styles.btt} `}>
              <Link to="/user" className="variant=" outline-dark size="sm">
                Cancel
              </Link>
            </Button>
          </Form>
        </div>
      </div>
      </div>
      </img>
      
      </div>
      </div>
      </div></div>
      </section>

      
    </>
  );
}

export default Add;
