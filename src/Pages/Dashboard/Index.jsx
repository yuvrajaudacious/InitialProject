import React from 'react'
import Adduser from '../../Component/Adduser/Index';
import Navbar from '../../Component/Navbar/Index'
import {userdata} from "../../Dummy";
const Dashboard = () => {
  console.log(userdata)
  return (
    <div>
        <Navbar/>
        <Adduser/>
       
    </div>
  )
}

export default Dashboard