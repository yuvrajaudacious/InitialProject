import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login/Index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup/Index';
import Dashboard from './Pages/Dashboard/Index';
import Navbar from './Component/Navbar/Index';
import Userlist from './Component/Userlist/Index';


function App() {
  return (
   <>
   <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login/>}></Route>
    <Route path="/" element={<Navbar/>}></Route>
    <Route path="/userlist" element={<Userlist/>}></Route>

    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/dashboard" element={<Dashboard/>}></Route>
  </Routes>
  </BrowserRouter>

   </>
  );
}

export default App;
