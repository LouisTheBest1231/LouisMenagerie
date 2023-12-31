import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";




//Custom Hook that return a JS object with a Header hierarchie (H2 : {H3, H3, H3}, H2:{H3}, etc.)
/*Used for the TableOfContent
 *I made it using a lot of internet ressources because I wasn't familiar with Node Objects

*/
export default function useHeaderData(){

    const [headerList, setHeaderList] = useState([])

    const location = useLocation()
    useEffect(()=>{
        const data  = Array.from(document.querySelectorAll("h2, h3"));
        
        const headerObject = MakeHeaderList(data)
        setHeaderList(headerObject)

    }, [location]);

    return headerList

}


//Helper Function that creates the Header Hierarchy
function MakeHeaderList(headerData){

    const headerObject = []

    headerData.forEach((header,index) => {
        const {innerText} = header
        if(header.nodeName === "H2"){
            header.id = String(index)
            headerObject.push({innerText:innerText, id:String(index), items:[]})
        }
        else if(headerObject.length > 0){

            const length = headerObject.length-1;
            header.id = String(index);
            headerObject[length].items.push({innerText:innerText, id:String(index)})
        }
    });
    return headerObject;
}