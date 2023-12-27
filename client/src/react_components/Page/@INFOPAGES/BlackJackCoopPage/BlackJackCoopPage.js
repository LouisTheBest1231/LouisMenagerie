import Warning from "../../../HelperModules/Warning/Warning";
import Menu1 from "./Images/Screenshot (152).png";
import Menu2 from "./Images/Screenshot (155).png";
import Menu3 from "./Images/Screenshot (156).png";
import Gameplay1 from "./Images/Screenshot (158).png";
import Gameplay2 from "./Images/Screenshot (159).png";
import Gameplay3 from "./Images/Screenshot (163).png";

import Server1 from "./Images/SERVER.png";
import Server2 from "./Images/Server2.png";

export default function BlackJackCoopPage() {

    return (
        <div className="contentpage">
            <h1>BlackJack Coop</h1>
            <img src={Menu1}></img>
            <h2>Description</h2>
                <h5>Black Jack, but, like, coop....</h5>
                <p>As the very tasteful name implies, <span>BlackJack Coop</span> was about making a coop BlackJack game. After finishing a
                    boring assignment in the software API <a href="https://www.qt.io/">Qt</a>, I discovered it's networking capabilities. So, having a basic
                    understanding of <i>Qt</i>, I decided to make a simple game where people from around the globe can play together.
                </p>
                <p>It is a very rudimentary game, where turn by turn, players select their action (Hit, Stand, Double Down, etc.). Players are fighting against 
                    the dealer (a simple bot) and they can see each other's cards. You can decide the amount of tokens you want to bet.
                </p>

            <h3>Images of UI</h3>
            <p></p>

            <img src={Menu2}></img>
            <img src={Menu3}></img>
            <h2>Functionalities</h2>
                <h5>How can a simple project be this complicated?</h5>
            <p>
                <h3>The Bot</h3>
                <p>
                    The instance of the server .....
                </p>
                <mathmiddle><span>Examples of gameplay</span></mathmiddle>
                <img src={Gameplay1}></img>
                <img src={Gameplay2}></img>
                <img src={Gameplay3}></img>
                <h3>The Networking</h3>
                <p>

                </p>
                <mathmiddle><span>Example of the server logs</span></mathmiddle>
                <img src={Server2}></img>

            </p>
                
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
            <Warning message="You need to portforward a server to be able to play! Additional informations in the 'How to play' section"/>
            <p>
                <span>BlackJack Coop</span>'s build is available for Windows' platforms only
                <ul>
                    <li>For the BlackJack Coop <span>Server and Client</span>'s build : <a href="https://ulavaldti-my.sharepoint.com/:u:/g/personal/lemes3_ulaval_ca/EeQW-FunWCRLqn4oKY94uoAB2rdIyABjWZnJDJ6gr9iddw?download=1">download</a></li>
                    <li>For the project's files : <a href="https://ulavaldti-my.sharepoint.com/:u:/g/personal/lemes3_ulaval_ca/EaOcvnE7cdNDjz-5Vf7gQa4BQD5jYBIjz5iRjl5AUl1_gg?download=1">download</a></li>
                </ul>
            </p>
            <h2>How to play</h2>
            <p>
                A single user needs to run the <span>Server</span> executable and portforward the <span>Port</span> selected. A rudimentary console is supposed to
                appear and log all the networking informations.
            </p>
            <p>
                Every player that wants to join a game needs to enter the valid <span>IP adress</span> and <span>Port number</span>. 
                He then needs to enter a valid room name to enter a <span>Lobby</span>. The game can then be started.
            </p>


        </div>
    );

}