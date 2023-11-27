import AboutPage from "./AboutPage/AboutPage";
import DonatePage from "./DonatePage/DonatePage";
import Footer from "./Footer/Footer";
import GenericPage from "./GenericPage/GenericPage";
import "./Page.css"
import {Routes, Route} from "react-router-dom"


export default function Page() {
    return (
        <div className="page">
            <div className="page_content">
                <Routes>
                    <Route exact path="/" element={<AboutPage/>} />
                    <Route path="/donate" element={<DonatePage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/g" element={<GenericPage/>}/>
                </Routes>
            </div>
            <Footer />
        </div>
    );
}


