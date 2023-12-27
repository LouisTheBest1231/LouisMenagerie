import Warning from "../../../HelperModules/Warning/Warning";

import imageGameplay1 from "./images/s1.jpg"
import imageGameplay2 from "./images/s2.jpg"
import imageGameplay3 from "./images/s3.jpg"
import imageGameplay4 from "./images/s4.jpg"
import imageGameplay5 from "./images/s5.jpg"

export default function TheGamePage(){

    return (
        <div className="contentpage">
            <h1>The Game</h1>
            
            <div className="contentpage_phoneimg">
                <img src={imageGameplay1} alt="gameplay of The Game"></img>
            </div>
            
            <h2>Description</h2>
            <h5>Incredible name for a game!</h5>
            <p>
                <span>The Game</span> is simple mobile game made with <a href="https://developer.android.com/studio?gclid=CjwKCAiAp5qsBhAPEiwAP0qeJnrl1-Tz-AuHHDVnT6Htmc2YYEvmQEqr9HI5mIIgmLxDrXELpW0-TxoChJsQAvD_BwE&gclsrc=aw.ds">Android Studio</a>.
                It was a team project back in CEGEP where, for a semester, we had to make an app. Our team decided to test our capabilities by making a 
                simple game.
            </p>
            <p>
                The goal of <span>The Game</span> is to move your character in order to avoid the blocks (the ennemies) and collect coins to buy skins.
                There is also an <span>Highscore System</span> that saves data onto the hard drive of the phone. It isn't an experience with a lot of content, but it 
                was a fun experiment.
            </p>

            <h3>Images of Gameplay</h3>
            <p></p>
            <div className="contentpage_phoneimg">
                <img src={imageGameplay2} alt="gameplay of The Game"></img>
                <img src={imageGameplay3} alt="gameplay of The Game"></img>
                <img src={imageGameplay4} alt="gameplay of The Game"></img>
                <img src={imageGameplay5} alt="gameplay of The Game"></img>
            </div>

            <h2>Things I learned</h2>
            <p>
                <span>I learned about ANDROID STUDIO.</span> Because the primary fonctionnalities offered by <i>Android Studio</i> aren't really 
                compatible for Game Loops (Android Studio is really event based), I had to read <span>a lot of documentation</span> to be able to program such system. 
                Therefore, at the end of the project, I had a fairly good understanding of the architecture of <i>Android Studio</i>.
            </p>


            <h2>Programs/Tools</h2>
            <h5>From scratch but not "really" from scratch</h5>
            <p>
                <h3>For programming</h3>
                    <ul>
                        <li><a href="https://developer.android.com/studio?gclid=CjwKCAiAp5qsBhAPEiwAP0qeJnrl1-Tz-AuHHDVnT6Htmc2YYEvmQEqr9HI5mIIgmLxDrXELpW0-TxoChJsQAvD_BwE&gclsrc=aw.ds">Android Studio</a></li>
                    </ul>

                <h3>Art Making</h3>
                    <ul>
                        <li><a href="https://www.gimp.org/downloads/">Gimp</a></li>
                        <li><a href="https://boscaceoil.net/">Bosca Ceoil</a></li>
                    </ul>
            </p>

            <h2>Download</h2>
            <Warning message={<div>You need <i>Android Studio</i> to build and download the project on an Android Device!</div>}/>
            <p>
                <span>The Game</span>'s build is available for Android's platforms only
                <ul>
                    <li>For the Github repo :<a href="https://github.com/LouisTheBest1231/TheGame.git">https://github.com/LouisTheBest1231/TheGame.git</a> </li>
                </ul>
            </p>

        </div>
    );
}