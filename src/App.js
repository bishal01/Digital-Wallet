import About from "./user/About";
import Footer from "./user/Footer";
import Navbar1 from "./user/Navbar1";
import Userdash from "./user/Userdash";
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="bg-black" >
      <Navbar1/>
    <Outlet/>

    <Footer/>
     
    </div>
  );
}

export default App;
