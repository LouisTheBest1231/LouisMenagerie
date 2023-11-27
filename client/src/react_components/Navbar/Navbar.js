import "./Navbar.css";
import logoDark from "./images/traceDark.svg"
import logoLight from "./images/traceLight.svg"
import CustomLink from "../HelperModules/CustomLink";
import { Link } from "react-router-dom";
export default function Navbar(){

    return (
        <header className="navbar">
            <Link to={"/"} className="navbar_leftside">
                <img  className="navbar_img_dark"src={logoDark} alt="Logo of Louis' Menagerie"/>
                <img className="navbar_img_light" src={logoLight} alt="Logo of Louis' Menagerie"/>
                <div className="navbar_leftside_hidable">Louis' Menagerie</div>
                
            </Link>
 
             <ul className="navbar_rightside">
                <CustomLink to={"/"} name={"About"} radius={30}/>
                <CustomLink to={"/donate"} name={"Donate"} radius={30}/>
            </ul>

            
        </header>
    );
}


