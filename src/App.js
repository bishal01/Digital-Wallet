import { useEffect, useState } from "react";
import About from "./user/About";
import Footer from "./user/Footer";
import Navbar1 from "./user/Navbar1";
import { Outlet } from 'react-router-dom';
import axios from 'axios'
function App() {
  const [jokes,setjokes]=useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setjokes(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])


  return (
    <div className="bg-black" >
      <Navbar1/>
    
    <Outlet/>

    <Footer/>
     
    </div>
  );
}

export default App;
