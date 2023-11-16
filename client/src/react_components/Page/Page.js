import AboutPage from "./AboutPage/AboutPage";
import DonatePage from "./DonatePage/DonatePage";
import Footer from "./Footer/Footer";
import "./Page.css"

export default function Page() {
    return (
        <div className="page">
            <div className="page_content">

                <AboutPage/>
            </div>
            <Footer />
        </div>
    );
}


