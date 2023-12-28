import Warning from "../../../HelperModules/Warning/Warning";
import imageDemo from "./Images/Capture.PNG"


export default function CalculatorPage(){
    return (
        <div className="contentpage">
            <h1>Calculator</h1>

            <img src={imageDemo} alt="Console Calculator"></img>
            <h2>Description</h2>
            <h5>Do I really need to describe what a calculator is?</h5>
            <p>
                <span>Calculator</span> is the <span>FIRST</span> fully fonctionnal program I ever made! It is a simple <span>
                    single line text parser</span> that makes math in the <span>Console</span>. It supports <span>Addition, Subtraction, Division, Multiplication and Parenthesis</span>.
                    The program also respects the standard priority of operations.   
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
                <span>Calculator</span>'s build is available for Windows' platforms only
                <ul>
                <li>For the functionnal build : <a href="https://ulavaldti-my.sharepoint.com/:u:/g/personal/lemes3_ulaval_ca/EQ3H9ub1pHJAuk-YM4hyhlkBpol0UtoosKTfbh72gJImmw?download=1">download</a></li>
                    <li>For the project's files : <a href="https://ulavaldti-my.sharepoint.com/:u:/g/personal/lemes3_ulaval_ca/EbMkzsQoxDVGv0gjEb177awBeSTmvM7Lcvcmj1MJ8UEBmw?download=1">download</a></li>
                </ul>
            </p>


        </div>
    );
}