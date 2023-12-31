import { useEffect, useState } from "react";



//Custom React Hook that returns if the viewport width is shorter than 700px :
// -----True :  screenWidth <= 700
// -----False : screenWidth >  700
export default function useScreenShort(){

    const smallScreenSize = 700;

    const [screenShort, setScreenShort] = useState(window.innerWidth <= smallScreenSize);

    useEffect(()=>{
        const onResize = ()=>{
            setScreenShort(window.innerWidth <= smallScreenSize);
        }
        window.addEventListener("resize", onResize);

            return ()=>{
                window.removeEventListener("resize", onResize)
            }
    }, []);

    return screenShort;

}