import React, { useState } from "react";
import * as yup from "yup";


const validationSchema = yup.object().shape({
  name: yup.string().required("please enter name"),
  email: yup.string().email("please enter email"),
});
console.log("validation Schema", validationSchema);
const ADDD = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name);

    setName({ ...name, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name,email);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        initialValues={{ email: "", name: "" }}
      >
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            name={name}
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={handleInput}

          />
         
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input name={email} class="form-control" placeholder="Password"                  onChange={handleInput}
 />
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" onSubmit={handleSubmit} class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ADDD;
