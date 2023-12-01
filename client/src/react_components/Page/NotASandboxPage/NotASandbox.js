
import imageTitle from "./Images/notasandbox.png"
import mouseHook from "./Images/Epic_project_-_testScene_-_Windows_Mac_Linux_-_Unity_2021.3.16f1_Personal__DX11__2023-04-11_00-47-50.mp4"
import schematicsPicture from "./Images/Epson_021620231612061514.jpg"
export default function NotASandboxPage(){
    return(
        <div className="contentpage">
            <h1>Not A Sandbox</h1>
            <img src={imageTitle} alt="Image that represents Not A Sandbox"/>
            <h2>Description</h2>
            <h5>Is is a Sandbox? or not?</h5>
            <p><span>Not A Sandbox</span> was a Cegep group project. The task at hand was to elaborate, plan and create a 
                software/game based on a scientific subject. After much brainstorming and deliberation, our team ended up choosing to program 
                a sandbox type interface. The goal of that interface was <span>to emulate the basics of Dynamics</span> {" (the physic of forces and motions) "} 
                from scratch in 2D. The idea was to deepen our understanding of the fondamentals of newtonian physics by diving head first into it and by trying to 
                simulate it with a computer. <span>We wanted our own 2D physics engine!</span>
            </p>
            <p>
                At first, the 3 laws of motions seemed easy to emulate : we simply had to manipulate position, speed and acceleration with a fixed <i>Timestep</i>.
                However, we quickly realised that it wasn't enough and that <span>our comprehension was incomplete! </span> 
                There was waaaaaaaay more to <span>Dynamics</span> than acceleration and speed. As a result, we went back to the drawing board and searched for academic papers on 
                2D physics engine. We found a lot of interesting stuff on the subject, but we decided to stick with the basics as a start :
                <ul>
                    <li>Fixed timestep Newton's law</li>
                    <li>Rotational dynamics</li>
                    <li>Collision detection</li>
                    <li>Collision solving</li>
                    <li>Surface friction</li>
                    <li>Air friction</li>

                </ul>

                But, that's the boring stuff, so when we realized we still had enough time for a couple of more features, 
                <span> we implemented more complex and exotic physics concepts :</span>
                <ul>
                    <li>Joints</li>
                    <li>Fluid dynamics</li>
                </ul>

                
            </p>


            
            <h2>Overview of my tasks</h2>
            <h5>With great power comes great responsability</h5>
            <p>
                As the unofficial project director of <span>Not a Sandbox</span>, I had a lot of responsabilities. Not only did I have to draft the schematics to 
                solidy our ideas of the project. I also had to build the foundation of the framework of the project, as one of the most experienced programmer on the team.
                Moreover, I had to complete my own part of scientific research and programming.
            </p>
            <h3>Schematics</h3>
            <p>I had to do the UI drafts and select the development environment. The UI drafts was fairly easy. I went for a very basic, almost cartoony style (But I didn't design the Main Menu, that's why it's kinda weird ahahah) :
                <img src={schematicsPicture} alt="Picture of the software blueprint made on paper"></img>
               For the development environment, we ended up choosing <i>Unity</i>. We put aside every physics library included in the <i>Unity Game Engine</i>, and used it only as a barebone game engine with easy to 
               use UI fonctionalities. I think it was a good choice, because it allowed us to completely focus on the <span>Physics</span> part of the software without worrying about graphics. 
            </p>
            <h3>Project's Framework</h3>
            <p></p>
            <h3>Basic Dynamics</h3>
            <p></p>
            <h3>Rotational Dynamics</h3>
            <p></p>
            <h3>Collision Detection</h3>
            <p></p>
            <h3>Collision Solving</h3>
            <p></p>
            <h3>Fluid Dynamics</h3>
            <p></p>



            <h2>Programs/Tools</h2>
            <p></p>
            <h2>Things I learned</h2>
            <p></p>
            <h2>Usefull ressources</h2>
            <p></p>
            <h2>Download</h2>
            <p></p>

        </div>
        
    );
}