
import { useEffect } from "react";
import AboutPage from "./AboutPage/AboutPage";
import DonatePage from "./DonatePage/DonatePage";
import Footer from "./Footer/Footer";
import GenericPage from "./GenericPage/GenericPage";
import NotASandboxPage from "./NotASandboxPage/NotASandbox";

import "./Page.css"
import {Routes, Route, useLocation} from "react-router-dom"
import BlackJackCoopPage from "./@INFOPAGES/BlackJackCoopPage/BlackJackCoopPage";
import Programmer101Page from "./@INFOPAGES/Programmer101Page/Programmer101Page";
import LouisMenagerieApp from "./@INFOPAGES/LouisMenageriePage/LouisMenagerieApp";


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
                    <Route path="/blackjackcoop" element={<BlackJackCoopPage/>}/>
                    <Route path="/programmer101" element={<Programmer101Page/>}/>
                    <Route path="/louismenagerie" element={<LouisMenagerieApp/>}/>
                </Routes>
            </div>
            <Footer />
        </div>
    );
}


