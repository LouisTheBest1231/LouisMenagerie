import Warning from "../../../HelperModules/Warning/Warning";
import WarningImportant from "../../../HelperModules/Warning/Warning;Important";

import MenuImage from "./Images/menu.png"
import Gameplay1 from "./Images/gameplay.png"
import Gameplay2 from "./Images/gameplay2.PNG"
import Lore from "./Images/lore.png"

export default function APoliticalTDPage(){
    return (
        <div className="contentpage">
            <h1>A-Political TD</h1>


            <WarningImportant message={<div>I was still a kid while making this project and I used countless images that doesn't belong to me to make 
                this game. So just a little disclaimer that the art used in this game, is tweeked Google images! (Note to my younger self : copyrights exist)
            </div>}/>

            <img src={Gameplay2}></img>

            <h2>Description</h2>
            <h5>I was 14...ooooooof</h5>
            <p>
                <span>A-Political TD</span> is an unfinished Tower Defense game taking place in WW2. It has very immature political themes, because 
                my younger self had just discovered history. Take this game with a massive grain of salt...please ahahah. In <span>A-Political TD</span>, the player
                places turrets in a grid system in order to destroy the ennemies from reaching his base. The game has multiple levels but there is 
                not a lot of content, so manage your expectations!. It was <span>the first non console game</span>  I created.
            </p>

            <h3>Images of Gameplay</h3>
            <p></p>
            <img src={MenuImage}></img>
            <img src={Lore}></img>
            <img src={Gameplay1}></img>

            <h2>Programs/Tools</h2>
            <h5>From scratch but not "really" from scratch</h5>
            <p>
                <h3>For programming</h3>
                    <ul>
                       <li><a href="https://www.processing.org/">Processing</a></li>
                    </ul>

                <h3>Art Making</h3>
                    <ul>
                        <li><a href="https://www.gimp.org/downloads/">Gimp</a></li>
                        <li>Countless ressources on Google Images</li>
                    </ul>
            </p>


            <h2>Download</h2>
            <Warning message={<div><i>Processing</i> takes a long time to load audio files. This means that the game takes a while to launch, 
            don't be surprised!</div>}/>
            <p>
                <span>A-Political TD</span>'s build is available for Windows' platforms only

                <ul>
                    <li>For the functionnal build : <a href="https://ulavaldti-my.sharepoint.com/:u:/g/personal/lemes3_ulaval_ca/ESw5gNEwx9NFvZsLbWvSYZIB4mflraPgkEBNH6UTMoFOZA?download=1">download</a></li>
                    <li>For the project's files : <a href="https://ulavaldti-my.sharepoint.com/:u:/g/personal/lemes3_ulaval_ca/ERAAUKr3XoFLrJ4iQ_70DCYBKF8y9aCINdfWq22CQsg9IA?download=1">download</a></li>
                </ul>
            </p>
        </div>
    );
}