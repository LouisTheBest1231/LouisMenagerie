
import imageGameplay1 from "./Images/g1.png"
import imageGameplay2 from "./Images/g2.png"
import imageGameplay3 from "./Images/g3.png"
import imageGameplay4 from "./Images/g4.png"
import imageGameplay5 from "./Images/g5.PNG"


export default function ApagosPage(){


    return (
        <div className="contentpage">
            <h1>Apagos</h1>

            <img src={imageGameplay1} alt="Menu screen of APAGOS"></img>

            <h2>Description</h2>
            <h5>Computer Board Game!!</h5>
            <p>
                <span>Apagos</span> is another school project! The goal of the school project was to recreate a (simple) board game with 
                the <a href="https://www.qt.io/">Qt</a> API. So, <span>Apagos</span> is a fully fonctionnal recreation of <a href="https://fr.wikipedia.org/wiki/Apagos">this board game</a> and 
                allows for couch play.
                There is some animations and <span>Drag and Drop</span> functionalities.
            </p>

            <h3>Images of Gameplay</h3>
            <p></p>
            <img src={imageGameplay2} alt="board of APAGOS"></img>
            <img src={imageGameplay3} alt="board of APAGOS"></img>
            <img src={imageGameplay4} alt="rules of APAGOS"></img>
            <img src={imageGameplay5} alt="settings of APAGOS"></img>

            <h2>Programs/Tools</h2>
            <h5>From scratch but not "really" from scratch</h5>
            <p>
                <h3>For programming</h3>
                    <ul>
                        <li><a href="https://www.qt.io/">Qt</a></li>
                    </ul>

                <h3>Art Making</h3>
                    <ul>
                        <li><a href="https://www.gimp.org/downloads/">Gimp</a></li>
                    </ul>
            </p>

            <h2>Download</h2>
            <p>
                <span>Apagos</span>' build is available for Windows' platforms only
                <ul>
                    <li>For the functionnal build : <a href="https://ulavaldti-my.sharepoint.com/:u:/g/personal/lemes3_ulaval_ca/EXhH1Xf7WPpPvrg05LS0PPABvaE84cSSrKil2d2E1fL59A?download=1">download</a></li>
                    <li>For the project's files : <a href="https://ulavaldti-my.sharepoint.com/:u:/g/personal/lemes3_ulaval_ca/EVJVd-plfoJJibRRN350pMsBH3hnm67V45qrlnYtEwKz_A?download=1">download</a></li>
                </ul>
            </p>
        </div>
    );
}