
import Warning from "../../../HelperModules/Warning/Warning";

import movieDemo from "./Images/2023-12-27 15-29-27.mp4"
import imageGameplay1 from "./Images/gameplay1.jpg"
import imageGameplay2 from "./Images/gameplay2.jpg"


export default function NBA2K2020Page(){
    return(
        <div className="contentpage">
            <h1>N-B-A 2k20</h1>
            
            <video controls><source src={movieDemo}></source></video>

            <h2>Description</h2>
            <h5>2K don't sue me please</h5>
            <p>
                <span>N-B-A 2k20</span>, not to be mistaken for the legendary basketball video game serie made by <a href="https://www.2k.com/en-US/">2K</a>
                , is a little minigame where you shoot a ball through a hoop. The game was made with <a href="https://www.processing.org/">Processing</a> as a 
                game engine and uses <a href="https://box2d.org/">Box2D</a> to compute the 2D physics of the environment.
            </p>
            
            <h3>Images of Gameplay</h3>
            <p></p>
            <img src={imageGameplay1} alt="Main Menu"></img>
            <img src={imageGameplay2} alt="The game demo"></img>


            <h2>Things I learned</h2>
            <p>
                <span>I learned about using LIBRARIES.</span> <i>Box2D</i> was the first big and complete library that I utilized for a project. I had a very 
                bad and time consuming habit of wanting to program everything from scratch, but I eventually learned to let go of my control obsession.
                Libraries, like <i>Box2D</i>, are very powerful tools. <span>It saves time and provides an optimised solution</span>, what is more to ask? 
            </p>

            <h2>Programs/Tools</h2>
            <h5>From scratch but not "really" from scratch</h5>
            <p>
                <h3>For programming</h3>
                    <ul>
                       <li><a href="https://www.processing.org/">Processing</a></li>
                       <li><a href="https://box2d.org/">Box2D</a></li>
                    </ul>

                <h3>Art Making</h3>
                    <ul>
                        <li><a href="https://www.gimp.org/downloads/">Gimp</a></li>
                    </ul>
            </p>

            <h2>Download</h2>
            <Warning message={<div><i>Processing</i> takes a long time to load audio files. This means that the game takes a while to launch, 
            don't be surprised!</div>}/>
            <p>
                <span>N-B-A 2k20</span>'s build is available for Windows' platforms only
                <ul>
                    <li>For the functionnal build : <a href="https://ulavaldti-my.sharepoint.com/:u:/g/personal/lemes3_ulaval_ca/EXEyz-jdAnRGnIexD-tKVvoBOzMxoH2DyBFu-4cj_jYg1w?download=1">download</a></li>
                    <li>For the project's files : <a href="https://ulavaldti-my.sharepoint.com/:u:/g/personal/lemes3_ulaval_ca/EX-W-XKsJb9Lm3nBmubikgkBI1fVIXLe0xpfsAdKe6OF8A?download=1">download</a></li>
                </ul>
            </p>

        </div>
    );
}