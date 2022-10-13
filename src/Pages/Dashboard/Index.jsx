import React from 'react'
import Header from '../../Component/Header/Header';
import User from '../../Component/User/User';
// import Navbar from '../../Component/Navbar/Index'

import {userdata} from "../../Dummy";
const Dashboard = () => {
  console.log(userdata)
  return (
    <div>
     
   <Header/>
    <User/>

  

 
    </div>
  )
}

export default Dashboard