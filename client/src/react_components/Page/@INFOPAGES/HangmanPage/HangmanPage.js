import Warning from "../../../HelperModules/Warning/Warning"
import ImageHangman from "./Images/Hangman2.png"

export default function HangmanPage(){
    return (
        <div className="contentpage">
            <h1>Hangman</h1>
            <img src={ImageHangman} alt="Little demo of the hangman game"></img>
            <h2>Description</h2>
            <h5>Save the poor guy!</h5>
            <p>
                <span>Hangman</span> is <span>a little console game</span> where the player must guess the unknown word.
                The player can guess individual letters and has a limited amount of tries. After each unsuccessful guess, the hangman gains a limb and
                gets closer to his death. 
            </p>

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
                <span>Hangman</span>'s build is available for Windows' platforms only
                <ul>
                    <li>For the functionnal build : <a href="https://ulavaldti-my.sharepoint.com/:u:/g/personal/lemes3_ulaval_ca/EfTaWuK9OhNIsyAYi9NIhgcB4XPtGnLVUWqqCdi9NIAcEQ?download=1">download</a> </li>
                    <li>For the project's files : <a href="https://ulavaldti-my.sharepoint.com/:u:/g/personal/lemes3_ulaval_ca/EZ5k2cBJnRlFittceNEEpzUBM-hOZTcvWDjE7pqZUdVYug?download=1">download</a></li>
                </ul>
            </p>
        </div>
    );
}