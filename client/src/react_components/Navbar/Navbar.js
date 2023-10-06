

import "./Navbar.css"
import NavbarContent from "./NavbarContent/NavbarContent";

export default function Navbar(){
    return (
        <div className="navbar">
            
            <div className="navbar_left"></div>
            <div className="navbar_bottom"></div>
            <div className="navbar_right"></div>
            <div className="navbar_top"><NavbarContent/></div>
        </div>
    );
}