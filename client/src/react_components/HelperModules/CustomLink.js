import {Link, useMatch, useResolvedPath} from "react-router-dom"
import "./CustomLink.css"

export default function CustomLink({to, name, radius, ...props}){
    const p = useResolvedPath(to);
    const isPath = useMatch({path:p.pathname, end:true});
    return(
        <li>
            <Link {...props} style={{borderRadius: radius}} className={isPath ? "custom_link_S" : "custom_link_NS"} to={to}>
                {name}
                
            </Link>
        </li>
    );
}
