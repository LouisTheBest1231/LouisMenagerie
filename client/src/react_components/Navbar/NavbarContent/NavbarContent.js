
import {Link, useMatch, useResolvedPath} from "react-router-dom";
import "./NavbarContent.css"
import logo from "./Logo-100X100.png"
import NavbarButtons from "./NavbarButtons/NavbarButtons";

export default function NavbarContent(){
    return (
        <div className="navbar_content">
           
           <Link to="/">
                <div className="navbar_element">   
                    <img src={logo} alt="LM Logo"></img>
                    <div>LOUIS' MENAGERIE</div>
                </div>
           </Link>
             
            <CustomLink to="/softwares" text="Softwares"/>
            <CustomLink to="/games" text="Games"/>
            <CustomLink to="/webpages" text="Webpages"/>
            <CustomLink to="/donate" text="Donate"/>
            <CustomLink to="/about" text="About"/>
            
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