const Signup  = () => {
    const [userRegistration, setUserRegistration] = useState({
      Name: "",
      email: "",
      password: "",
      address: "",
      gender: "",   
      number: ""
    });
  
    const handleInput = (e) => {
      const Name = e.target.name;
      const value = e.target.value;
      console.log(value.name);
  
  
      setUserRegistration({ ...userRegistration, [Name] : value});
      
    };
  const handleSubmit =(event)=>{
    event.preventDefault()
    console.log(userRegistration)
  }

  import React,{ useState } from "react";




  <Form.Group as={Col} controlId="formGridEmail">
  <Form.Label>Name</Form.Label>
  <Form.Control
    type="name"
    placeholder="Enter name"
    // value={userRegistration.Name}
    onChange={handleInput}
  
  />