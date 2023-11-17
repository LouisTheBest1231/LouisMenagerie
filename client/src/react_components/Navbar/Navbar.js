import "./Navbar.css";
import logoDark from "./images/traceDark.svg"
import logoLight from "./images/traceLight.svg"
export default function Navbar(){

    return (
        <header className="navbar">
            <div className="navbar_leftside">
                <img  className="navbar_img_dark"src={logoDark} alt="Logo of Louis' Menagerie"/>
                <img className="navbar_img_light" src={logoLight} alt="Logo of Louis' Menagerie"/>
                <div className="navbar_leftside_hidable">Louis' Menagerie</div>
            </div>
 
             <ul className="navbar_rightside">
                <li><a href="about">About</a></li>
                <li><a href="donate">Donate</a></li>
            </ul>

            
        </header>
    );
}