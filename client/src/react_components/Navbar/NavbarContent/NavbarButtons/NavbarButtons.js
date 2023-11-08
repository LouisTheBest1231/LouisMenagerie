import "./NavbarButtons.css"

export default function NavbarButtons({text}){

    return (
        <div className="navbar_buttons">
            <div className="EMPTY"></div>
            <div className="NOTEMPTY">{">"}</div>
            {text}

        </div>
    );
}