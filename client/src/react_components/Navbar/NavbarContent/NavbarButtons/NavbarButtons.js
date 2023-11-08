import "./NavbarButtons.css"

export default function NavbarButtons({text, className}){

    return (
        <div className={className}>
            <div className="EMPTY"></div>
            <div className="NOTEMPTY">{">"}</div>
            {text}

        </div>
    );
}