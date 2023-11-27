
import imageTitle from "./Images/notasandbox.png"
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