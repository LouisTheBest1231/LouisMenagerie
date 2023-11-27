
import { useEffect } from "react";
import AboutPage from "./AboutPage/AboutPage";
import DonatePage from "./DonatePage/DonatePage";
import Footer from "./Footer/Footer";
import GenericPage from "./GenericPage/GenericPage";
import NotASandboxPage from "./NotASandboxPage/NotASandbox";

import "./Page.css"
import {Routes, Route, useLocation} from "react-router-dom"


export default function Page() {

    //Makes the windows scroll to top when route change
    const location = useLocation();
    useEffect(()=>{
        window.scrollTo(0,0);
    }, [location])

    return (
        <div className="page">
            <div className="page_content">
                <Routes>
                    <Route exact path="/" element={<AboutPage/>} />
                    <Route path="/donate" element={<DonatePage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/notasandbox" element={<NotASandboxPage/>}/>
                </Routes>
            </div>
            <Footer />
        </div>
    );
}


