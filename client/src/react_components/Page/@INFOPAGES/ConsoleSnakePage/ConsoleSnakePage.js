

import imageGameplay3 from "./images/g3.png"
import imageGameplay4 from "./images/g4.PNG"

import movieDemo from "./images/2023-12-27 16-27-09.mp4"
import Warning from "../../../HelperModules/Warning/Warning"

export default function ConsoleSnakePage(){
    return (
        <div className="contentpage">
            <h1>Snake!!</h1>
            
            <video controls><source src={movieDemo} alt="Demo of the snake game"></source></video>

            <h2>Description</h2>
            <h5>Every programmer eventually makes this game :)</h5>
            <p>
                <span>Snake!!</span> is one of the first <span>Console Application</span> I ever made. It is a simple console game made 
                in <i>C#</i> with <i>Visual Studio</i>. Without any surprise, it is a recreation of the famous game of <span>Snake</span>, where a snake must collect 
                apples without hitting himself or boundaries. The twist of this version, is that everything is made in a console environnment. So the graphics
                are <span>ASCII characters!</span>
            </p>

            <h3>Images of Gameplay</h3>
            <p></p>
            <img src={imageGameplay3} alt="A little Snake Game in the console"></img>
            <img src={imageGameplay4} alt="Game Over screen"></img>

            <h2>Programs/Tools</h2>
            <h5>From scratch but not "really" from scratch</h5>
            <p>
                <h3>For programming</h3>
                    <ul>
                        <li><a href="https://visualstudio.microsoft.com/fr/">Visual Studio</a></li>
                    </ul>
            </p>

            <h2>Download</h2>
            <Warning message={<div>This application was made with <i>C#</i>. So, you need the .Net module on your computer to run it!</div>}/>
            
            <p>
                <span>Snake!!</span>'s build is available for Windows' platforms only
                <ul>
                    <li>For the functionnal build : <a href="https://ulavaldti-my.sharepoint.com/:u:/g/personal/lemes3_ulaval_ca/ERsYQAzVBAlGn1q4M34kw2EBDwj9UBBB449Qp122OSgMIg?download=1">download</a></li>

                    <li>For the project's files : <a href="https://ulavaldti-my.sharepoint.com/:u:/g/personal/lemes3_ulaval_ca/EftQKYBRkwFAowJcXGEm_FEBF6iMXnSGmX5R95k2QRcGHQ?download=1">download</a></li>
                </ul>
            </p>

        </div>
    )
}