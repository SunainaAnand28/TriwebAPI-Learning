import { Link } from "react-router-dom";
import MainMenuStyle from "./MainMenu.module.css";


function MainMenu(){
return <header className="MainMenuStyle.header">
{/*     
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a> */}
    <nav>
        <ul>
            <li> <Link to= "/">Home</Link></li>
            <li><Link to= "/about">About</Link></li>
            <li>  <Link to= "/contact">Contact</Link></li>
            <li>  <Link to= "/product">Product</Link></li>
        </ul>
    </nav>
   
    
  

</header>

}


export default MainMenu;