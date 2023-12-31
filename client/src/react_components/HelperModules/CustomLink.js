import {Link, useMatch, useResolvedPath} from "react-router-dom"
import "./CustomLink.css"


//React Module that is used for the IndexModule/Navbar
/************************Check if the path match the current one to HIGHLIGHT the element, otherwise render it normally
 * Uses react-router-dom hooks
*/
export default function CustomLink({to, name, radius, ...props}){
    const p = useResolvedPath(to);

    //Compares the current client's path with the path of the element (as a bool)
    const isPath = useMatch({path:p.pathname, end:true});

    return(
        <li>
            {/*Render the button HIGHLIGHTED or NORMAL*/}
            <Link {...props} style={{borderRadius: radius}} className={isPath ? "custom_link_S" : "custom_link_NS"} to={to}>
                {name}
                
            </Link>
        </li>
    );
}

