import Warning from "../../../HelperModules/Warning/Warning";
import WarningImportant from "../../../HelperModules/Warning/Warning;Important";
import ImageGameInfo1 from "./Images/classSelection.PNG";
import ImageGameInfo2 from "./Images/gameInfo.png";
import ImageGameInfo3 from "./Images/gameInfo2.PNG";

import ImageGameplay1 from "./Images/GamePlay2.png";
import ImageGameplay2 from "./Images/GamePlay.png";
import ImageGameplay3 from "./Images/Gameplay3.png";
import ImageGameplay4 from "./Images/Gameplay4.png";
import ImageGameplay5 from "./Images/Gameplay5.png";
import ImageGameplay6 from "./Images/Gameplay6.png";
import ImageGameplay7 from "./Images/Gameplay7.png";

export default function ABoringRPGPage(){

    return (
        <div className="contentpage">
            <h1>The Boring RPG</h1>
            
            <WarningImportant message={<div>I was still a kid while making this project and I used countless images that doesn't belong to me to make 
                this game. So just a little disclaimer that the art used in this game, is tweeked Google images! (Note to my younger self : copyrights exist)
            </div>}/>


            <img src={ImageGameplay1}></img>

            <h2>Description</h2>
            <h5>Yeah the game isn't thrilling</h5>
            <p>
                <span>The Boring RPG</span>, is a mix of <i>Pokemon</i> and a randomly generated dungeon crawler. Even thought this idea sounds great, 
                the execution is not so great and the game is kind of boring. As the player, <span>you choose your class</span> and enter a <span>randomly generated dungeon</span> with multiple stages. You move room
                to room and encounter ennemies/loot/shops/events. Each stage has a bossfight.
            </p>
            <h3>Images of Gameplay</h3>
            <p></p>
            <img src={ImageGameInfo1}></img>
            <img src={ImageGameInfo2}></img>
            <img src={ImageGameInfo3}></img>
            <img src={ImageGameplay2}></img>
            <img src={ImageGameplay3}></img>
            <img src={ImageGameplay4}></img>
            <img src={ImageGameplay5}></img>
            <img src={ImageGameplay6}></img>
            <img src={ImageGameplay7}></img>


            <h2>Things I learned</h2>
            <p>
                <span>I learned about MAKING CONTENT (and how hard it is).</span> The scale of this game was massive for a single beginner developer like me. It was a huge task to create engaging 
                content for the whole duration of the game. So, I eventually decided to cut a lot of corners and make repetitve/bland content to save time.
                I think this is the main reason why this game isn't that fun. Creating content requires efforts and thoughs!
            </p>



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
                <span>The Boring RPG</span>'s build is available for Windows' platforms only

                <ul>
                    
                    <li>For the functionnal build : <a href="https://ulavaldti-my.sharepoint.com/:u:/g/personal/lemes3_ulaval_ca/Ea58Lu-Wi1pIjgbYfELs9mQBuinSb2Bt6hyO279wIbETww?download=1">download</a></li>
                    <li>For the project's files : <a href="https://ulavaldti-my.sharepoint.com/:u:/g/personal/lemes3_ulaval_ca/EfmJqmEIMtxEgiBlAGPmI2cBGD9VttBNB5Cp240yVkqYgA?download=1">download</a></li>
                </ul>
            </p>

        </div>
    );
}