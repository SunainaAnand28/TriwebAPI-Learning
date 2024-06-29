import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import {Routes ,Route } from "react-router-dom";
import MainMenu from "./components/layouts/MainMenu";
import Product from "./pages/Product";


function App() {
  return (
    <div >
        <MainMenu></MainMenu>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>} ></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        
        
        </Routes  >

      
    </div>
  );
}

export default App;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          