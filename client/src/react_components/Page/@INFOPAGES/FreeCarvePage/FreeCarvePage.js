import Warning from "../../../HelperModules/Warning/Warning";
import freeCarveLogo from "./images/freecarve2.svg";

export default function FreeCarvePage(){
    return (
        <div className="contentpage">
            <h1>Free Carve</h1>

            <Warning message={<div>
                This is a school project and is a result of the effort of me and my 4 other team members : 
                
                 <b>Adam Côté, Antoine Morin, Sophie Charles Nayebi, Sébastien Dubé</b>. Big thanks to them and their efforts,
                otherwise, this project wouldn't have been possible.
            </div>}/>

            <img src={freeCarveLogo} alt="logo of FreeCarve"></img>
            <h2>Description</h2>
            <h5>Free is good, nothing is better than free</h5>
            <br/>
            <h3>Why Free Carve?</h3>
            <p>
                Free Carve is the final result of a session worth of efforts for the class 
                <span> Software Engineering Object Oriented</span>. It was a very tedious class with a heavy load of homework but the amazing 
                team I was with, made it bearable. Once again, big thanks to <span><b>Adam Côté, Antoine Morin, Sophie Charles Nayebi, Sébastien Dubé</b></span>.
                You boys and gals rock!
            </p>
            <h3>What is Free Carve?</h3>
            <p>
                The goal of this was to make a GCODE generator for CNC machines in order to <span>emulate a Panel Saw</span>. Of course, the UI and UX had to 
                be user friendly. Luckily, we had a lot of liberties concerning the looks of our application, so we shaped it how we wanted. The only guidelines we had to follow was specific functionalities enumerated by the teacher.
            </p>

            <video controls><source src="https://www.louismenagerie.com/videos/video_freecarve.mp4"></source></video>

            <h2>Things I Learned</h2>
            <h5>Knowledge is power</h5>
            <br/>
            <h3>General OOP principles</h3>
            <p>
                I was already familiar with OOP : classes, polymorphism, etc. But I never really understood the <span>WHY</span> of OOP.
                This is what this class taught me : <span>why is OOP so widespread and used everywhere?</span>.
                The answer to this is the <i>Grasp Principles</i> : 
                <ul>
                    <li>Controller</li>
                    <li>Creator</li>
                    <li>Indirection</li>
                    <li>Information</li>
                    <li>Expert</li>
                    <li>Low coupling</li>
                    <li>High cohesion</li>
                    <li>Polymorphism</li>
                    <li>Protected variations</li>
                    <li>Pure fabrication</li>
                </ul>
                I encourage everyone to go look them up and understand them, they will become vital to you, as a developper!
            </p>
            <h3>Pattern designs</h3>
            <p>
                An important aspect of this class was the exploration of <span>commun design patterns </span>in Object Oriented Programming.
                Things like <i>Composite</i>,  <i>Adapter</i>, <i>Singleton</i> or <i>Strategy</i>, patterns are useful tested and proven tools 
                to allow for clean and modulable coding bases.
            </p>
            <h3>UML diagrams</h3>
            <p>
                I learned about the different UML diagrams that exist (Behavior, System, Class, etc), 
                and how to draw them. I discovered how useful this step of planning really is when developping an actual <span>Software!</span>.
            </p>

            <h3>Teamwork!</h3>
            <p> 
                This project was a fun learning experience with the different team management tools available.
                We used <a href="https://www.jetbrains.com/youtrack"> YouTrack</a>, 
                <a href="https://trello.com/Trello"> Trello</a>, 
                <a href="https://www.microsoft.com/en-ca/microsoft-teams/log-in"> Teams</a> and 
                <a href="https://discord.com/"> Discord</a> 
            </p>

            <h2>Functionalities</h2>
            Here is a small list of all the functionalities we implemented for <span>FreeCarve</span> : 
            <ul>
                <li>2D editor, with drawing capabilities</li>
                <li>Pixel to mm coordinate system</li>
                <li>Intricate and fonctionnal UI</li>
                <li>List of cuts</li>
                <li>Generic attribute panel to modify parameters</li>
                <li>GCODE exporter from our own data</li>
                <li>Metric and imperial conversion system</li>
                <li>Saving, Undo/Redo system</li>
                <li>3D viewer</li>
                <li>Export parameter panel</li>
                <li>Q&A panel</li>
            </ul>
            <h2>Programs/Tools</h2>
            <h5>From scratch but not "really" from scratch</h5>
            <p>
                <h3>For programming</h3>
                    <ul>
                        <li><a href="https://www.java.com/en/">Java</a></li>
                        <li><a href="https://www.jetbrains.com/idea/">IntelliJ</a></li>
                    </ul>
                <h3>For UML diagrams</h3>
                <ul>
                    <li><a href="https://www.visual-paradigm.com/">Visual Paradigm</a></li>
                </ul>
                <h3>Art making</h3>
                <ul>
                    <li>
                        <a href="https://editor.method.ac/">Method Draw Vector Editor</a>
                    </li>
                </ul>
            </p>
            <h2>Download</h2>
            <p>
                Because this is a recent school project, I can't provide the repo of the project!
                It will become available soon.
            </p>
        </div>
    )
}