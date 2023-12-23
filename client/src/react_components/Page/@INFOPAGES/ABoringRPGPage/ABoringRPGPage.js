import Warning from "../../../HelperModules/Warning/Warning";
import WarningImportant from "../../../HelperModules/Warning/Warning;Important";



export default function ABoringRPGPage(){

    return (
        <div className="contentpage">
            <h1>The Boring RPG</h1>

            <WarningImportant message={<div>I was still a kid while making this project and I used countless images that doesn't belong to me to make 
                this game. So just a little disclaimer that the art used in this game, is tweeked Google images! (Note to my younger self : copyrights exist)
            </div>}/>
            <h2>Description</h2>
            <h5>Yeah the game isn't thrilling</h5>
            <p>
                <span>The Boring RPG</span>, is a mix of <i>Pokemon</i> and a randomly generated dungeon crawler. Even thought this idea sounds great, 
                the execution is not so great and the game is kind of boring. As the player, <span>you choose your class</span> and enter a <span>randomly generated dungeon</span> with multiple stages. You move room
                to room and encounter ennemies/loot/shops/events. Each stage has a bossfight.
            </p>


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
                    <li>For the functionnal build : </li>
                </ul>
            </p>

        </div>
    );
}