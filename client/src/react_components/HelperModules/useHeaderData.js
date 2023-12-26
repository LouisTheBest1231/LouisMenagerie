import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";





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


function MakeHeaderList(headerData){

    const headerObject = []

    headerData.forEach((header,index) => {
        const {innerText, id} = header
        if(header.nodeName == "H2"){
            header.id = String(index)
            headerObject.push({innerText:innerText, id:String(index), items:[]})
        }
        else if(headerObject.length > 0){

            const length = headerObject.length-1;
            const newID = String(index) + "-" + String(headerObject[length].items.length);
            header.id = newID;
            headerObject[length].items.push({innerText:innerText, id:newID})
        }
    });
    return headerObject;
}