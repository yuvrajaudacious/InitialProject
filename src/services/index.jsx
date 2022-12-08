    import ApiCaller from '../utils'
 
    export const signUp = ({
  name,
  email,
  contactnumber,
  password,
  address,
  gender,
 }) =>{
  ApiCaller("/signUp","POST",{
    name,
    email,
    contactnumber,
    password,
    address,
    gender,
  })
 }
     
 
 
