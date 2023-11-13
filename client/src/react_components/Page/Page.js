import Footer from "./Footer/Footer";
import "./Page.css"

export default function Page() {
    return (
        <div className="page">
            <div className="page_content">

                {TESTING(3).map((n) => (
                    <div>hello hello
                    </div>
                ))}

            </div>
            <Footer />
        </div>
    );
}


function TESTING(n) {
    const test = []
    for (let i = 0; i < n; i++) {
        test.push(i)
    }
    return test
}