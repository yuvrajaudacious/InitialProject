import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login/Index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup/Index';
import Dashboard from './Pages/Dashboard/Index';
import Navbar from './Component/Navbar/Index';
import Add from './Component/Adduser/Add';
import User from './Component/User/User';
import Edit from './Component/Adduser/Edit';
import Header from './Component/Header/Header';
import Pro from './Component/Profile/Pro';
// import Forget from './Pages/Login/forget/Forget';
import ADDD from './Component/Adduser/ADDD';
import Silider from './Component/Home.jsx/Silider';
import Headers from './Component/Home.jsx/Headers';



function App() {
  return (

   <>
   <BrowserRouter>
  <Routes>
    <Route path="" element={<Login/>}></Route>
  

    <Route path="/" element={<Navbar/>}></Route>

    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/dashboard" element={<Dashboard/>}></Route>
    <Route path="/user" element={<User/>}></Route>
    <Route path="/user" element={<Header/>}></Route>

    <Route path="/add" element={<Add/>}></Route>
    <Route path="/edit" element={<Edit/>}></Route>
    <Route path="/pro" element={<Pro/>}></Route>
    <Route path="/addd" element={<ADDD/>}></Route>
    <Route path="/silider" element={<Silider/>}></Route>
    <Route path="/header" element={<Headers/>}></Route>

    {/* <Route path="/Forget" element={<Forget/>}></Route> */}

  </Routes>
  </BrowserRouter>
   </>
  );
}

export default App;
