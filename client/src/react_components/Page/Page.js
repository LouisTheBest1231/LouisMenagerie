
import { useEffect } from "react";
import AboutPage from "./AboutPage/AboutPage";
import DonatePage from "./DonatePage/DonatePage";
import Footer from "./Footer/Footer";
import GenericPage from "./GenericPage/GenericPage";
import NotASandboxPage from "./NotASandboxPage/NotASandbox";

import "./Page.css"
import { Routes, Route, useLocation } from "react-router-dom"
import BlackJackCoopPage from "./@INFOPAGES/BlackJackCoopPage/BlackJackCoopPage";
import Programmer101Page from "./@INFOPAGES/Programmer101Page/Programmer101Page";
import LouisMenagerieApp from "./@INFOPAGES/LouisMenageriePage/LouisMenagerieApp";
import NBA2K2020Page from "./@INFOPAGES/NBA2K2020Page/NBA2K2020Page";
import ABoringRPGPage from "./@INFOPAGES/ABoringRPGPage/ABoringRPGPage";
import APoliticalTDPage from "./@INFOPAGES/APoliticalTDPage/APoliticalTDPage";
import TheGamePage from "./@INFOPAGES/TheGamePage/TheGamePage";
import ApagosPage from "./@INFOPAGES/ApagosPage/ApagosPage";
import ConsoleSnakePage from "./@INFOPAGES/ConsoleSnakePage/ConsoleSnakePage";
import CalculatorPage from "./@INFOPAGES/CalculatorPage/CalculatorPage";
import HangmanPage from "./@INFOPAGES/HangmanPage/HangmanPage";
import OgreTestPage from "./@INFOPAGES/OgreTestPage/OgreTestPage";
import TableOfContent from "./TableOfContent/TableOfContent";


export default function Page() {

    //Makes the windows scroll to top when route change
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])

    return (
        <div className="page">

            <div className="page_horizontal">
                <div className="page_content">
                    <Routes>
                        <Route exact path="/" element={<AboutPage />} />
                        <Route path="/donate" element={<DonatePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/notasandbox" element={<NotASandboxPage />} />
                        <Route path="/blackjackcoop" element={<BlackJackCoopPage />} />
                        <Route path="/programmer101" element={<Programmer101Page />} />
                        <Route path="/louismenagerie" element={<LouisMenagerieApp />} />
                        <Route path="/nba2k" element={<NBA2K2020Page />} />
                        <Route path="/rpg" element={<ABoringRPGPage />} />
                        <Route path="/td" element={<APoliticalTDPage />} />
                        <Route path="/thegame" element={<TheGamePage />} />
                        <Route path="/apagos" element={<ApagosPage />} />
                        <Route path="/consolesnake" element={<ConsoleSnakePage />} />
                        <Route path="/consolecalculator" element={<CalculatorPage />} />
                        <Route path="/consolehangman" element={<HangmanPage />} />
                        <Route path="/testingogre" element={<OgreTestPage />} />
                    </Routes>
                </div>
                <div className="page_toc">
                    <TableOfContent/>
                </div>
            </div>
            <Footer />
        </div>
    );
}


