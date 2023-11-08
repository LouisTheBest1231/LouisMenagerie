
import "./NavbarContent.css"
import logo from "./Logo-100X100.png"
import NavbarButtons from "./NavbarButtons/NavbarButtons";
export default function NavbarContent(){
    return (
        <div className="navbar_content">
            <div className="navbar_element">
                <img src={logo} alt="LM Logo"></img>
            </div>
            <NavbarButtons text={"Softwares"}/>
            <NavbarButtons text={"Games"}/>
            <NavbarButtons text={"Webpages"}/>
            <NavbarButtons text={"Donate"}/>
            <NavbarButtons text={"About"}/>
        </div>
    );
}