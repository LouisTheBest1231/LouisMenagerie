
import {Link, useMatch, useResolvedPath} from "react-router-dom";
import "./NavbarContent.css"
import logo from "./Logo-100X100.png"
import NavbarButtons from "./NavbarButtons/NavbarButtons";

import {IoIosMore} from "react-icons/io";
import { IconContext } from "react-icons";

export default function NavbarContent(){
    return (
        <div className="navbar_content_parent">
        <div className="navbar_content">
           
           <Link to="/">
                <div className="navbar_element">   
                    <img src={logo} alt="LM Logo"></img>
                    <div className="navbar_element_LM">LOUIS' MENAGERIE</div>
                </div>
           </Link>
             
            <div className="navbar_element_softwares">
                <CustomLink to="/softwares" text="Softwares"/></div>

            <div className="navbar_element_games">
                <CustomLink to="/games" text="Games"/></div>

            <div className="navbar_element_webpages">
                <CustomLink to="/webpages" text="Webpages"/></div>

            <div className=""><CustomLink to="/donate" text="Donate"/></div>
            <div><CustomLink to="/about" text="About"/></div>
            
            

        </div>
        <div className="navbar_hamburger">
            <IconContext.Provider value={{className:"navbar_hamburger_logo"}}>
            <IoIosMore/>
            </IconContext.Provider>

        </div>

        </div>
    );
}

function CustomLink({to, text}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end:true})

    return(
        <Link to={to}>
            <NavbarButtons text={text} className={isActive ? "navbar_buttons_active" : "navbar_buttons"}/>
        </Link>
    );
}