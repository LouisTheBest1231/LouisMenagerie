import "./Footer.css"

export default function Footer(){

    function getYear(){
        return new Date().getFullYear();
    }

    return (
        <div className="footer">
            © {getYear()} Louis-Etienne Messier
        </div>
    );
}