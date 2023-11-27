import "./Navbar.css";
import logoDark from "./images/traceDark.svg"
import logoLight from "./images/traceLight.svg"
import CustomLink from "../HelperModules/CustomLink";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { IconContext } from "react-icons";
export default function Navbar({toggleDropDown,setIsDropDown, isDropDown}){


    return (
        <header className="navbar">
            <Link to={"/"} className="navbar_leftside" onClick={()=>{setIsDropDown(false)}}>
                <img  className="navbar_img_dark"src={logoDark} alt="Logo of Louis' Menagerie"/>
                <img className="navbar_img_light" src={logoLight} alt="Logo of Louis' Menagerie"/>
                <div className="navbar_leftside_hidable">Louis' Menagerie</div>
                
            </Link>
 
             <ul className="navbar_rightside">
                <CustomLink to={"/"} name={"About"} radius={30}/>
                <CustomLink to={"/donate"} name={"Donate"} radius={30}/>
                <IconContext.Provider value={{className: (isDropDown ? "navbar_rightside_hamburger_selected": "navbar_rightside_hamburger" )}}><IoIosMenu onClick={toggleDropDown}/></IconContext.Provider>
            </ul>

            
        </header>
    );
}


