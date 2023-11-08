import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import MainPage from "../Pages/MainPage/MainPage";
import "./ContentBox.css"
import SoftwaresPages from "../Pages/SoftwaresPage/SoftwaresPage";
import GamesPage from "../Pages/GamesPage/GamesPage";
import WebpagesPage from "../Pages/WebpagesPage/WebpagesPage";
import DonatePage from "../Pages/DonatePage/DonatePage";
import AboutPage from "../Pages/AboutPage/AboutPage";


export default function ContentBox(){
    return (
        <div className="content_box">

            <Routes>
                <Route
                    exact
                    path="/"
                    element={<MainPage/>}
                />

                <Route
                    path="/softwares"
                    element={<SoftwaresPages/>}
                />

                <Route
                    path="/games"
                    element={<GamesPage/>}
                />

                <Route
                    path="/webpages"
                    element={<WebpagesPage/>}
                />

                <Route
                    path="/donate"
                    element={<DonatePage/>}
                />

                <Route
                    path="/about"
                    element={<AboutPage/>}
                />

            </Routes>

        </div>
    );
}