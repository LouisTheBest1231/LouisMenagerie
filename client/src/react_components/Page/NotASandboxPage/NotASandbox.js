
import imageTitle from "./Images/notasandbox.png"
import mouseHook from "./Images/Epic_project_-_testScene_-_Windows_Mac_Linux_-_Unity_2021.3.16f1_Personal__DX11__2023-04-11_00-47-50.mp4"
import movieCollisionSolving from "./Images/movie_013.mp4"
import movieFluidSimulation from "./Images/movie_015.mp4"
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
            <p>
                Because we wanted to implement everything from pretty much scratch, we had to built our own simulation framework. And because we were complete beginners, we had to 
                reach out for outside sources. One of the most important document we found was a PDF from ULaval (A well knowned University here in Quebec) called "<a href="http://www2.ift.ulaval.ca/~dupuis/Modelisation%20et%20animation%20par%20ordinateur%20IFT-66819%20et%20IFT-22726/Simulation%20de%20corps%20rigides/Simulation%20de%20corps%20rigides.pdf">
                    Simulation de corps rigides
                </a>". There is no name on the document, but a <span>big thanks to whoever made it!</span>. The document touches a lot of important aspects, one of which was the idea of <span>discrete timesteps</span>.
            </p>
            <p>
                The idea of discrete timesteps is important because we have a limited amount of processing power, so we can't simulate every infinitesimal interval of time between each second.
                So we have to implement a certain amount of <i>ticks</i> per second where the physics calculation happens. Therefore, we had to implement in Unity some kind of <span>Game Loop</span> that looked like this : 
                <ol>
                    <li>Get the informational data of the objects in the scene (speed, positions, etc.) </li>
                    <li>Detect collisions</li>
                    <li>Resolve the collisions and update the informational data of the objects</li>
                    <li>Calculate the physics and displace the objects based on the fixed timestep</li>
                    <li>Draw the objects of the screen</li>
                    <li>Repeat!!</li>
                </ol>
            </p>

            <h3>Basic Dynamics</h3>
            <p>
                This is the easy part, that is if you remember well your basic highschool physics class! Essentially the goal of this part was to implement the 
                <span> 3 basics <a href="https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/newtons-laws-of-motion/">Newtonian Laws of Motion</a></span>:
                <mathmiddle>
                    <div>Law of Conservation of motion</div>
                    <div>Law of Force / Mass / Acceleration</div>
                    <div>Law of Action - Reaction</div>
                </mathmiddle>
                These laws were fairly easy to implement, consisting of only a couple of equations. 
            </p>
            <h3>Rotational Dynamics</h3>
            <p>
                This is were the complexity begins (Ouch!). Rotationnal Dynamic involves these rotationnal informations : 
                <mathmiddle>
                    <div>Rotationnal Position (θ)</div>
                    <div>Rotationnal Speed (ω)</div>
                    <div>Rotationnal Acceleration (α)</div>
                </mathmiddle>
                These are basically homologous to their basic dynamics counterpart (position, speed, acceleration). Another important aspect 
                of Rotationnal Dynamic is the idea of Torque (τ), of moment of Inertia (I) and of Center of Mass (CM). When you apply a force to an object, the rotation of the object will evolve depending
                on <span>where</span> the force is applied and the <span>shape of the object</span>. There is much subtilities to this physic phenomenon. I recommend 
                this <a href="https://www.toptal.com/game/video-game-physics-part-i-an-introduction-to-rigid-body-dynamics">article</a>, by Nilson Souto, that does a deep dive into 
                the algorithm necessary to simulate such behavior. 
            </p>


            <h3>Collision Detection</h3>
            <p>
                Because we weren't using any of Unity's built-in functionnalities, we had to create our own system to detect collisions. Luckily, such 
                algorithms have been researched by people much smarter than us. We explored all kinds of algorithms because we wanted to implement as much different
                shapes as possible into our simulation : 
                <mathmiddle>
                    <div>Circle vs Circle</div>
                    <div>Circle vs Polygon</div>
                    <div>Polygon vs Polygon</div>
                </mathmiddle>
                Circle vs Circle is by far the easiest type of collision detection because of the nature of such shape.
                Circle vs Polygon is much more complex than it seems at first and the algorithm is well explored by this  
                <a href="https://www.jeffreythompson.org/collision-detection/poly-circle.php"> article of Jeffrey Thompson</a>.
                Finally, Polygon vs Polygon is without any doubt the most complicated collision to solve. To be able to detect collisions of such shapes,
                we used the <span>Seperate Axis Theorem (SAT)</span>. It is a very powerful and fairly fast tool to detect collisions between <i>convex polygons</i>.
                The basic idea behind it is to project the points of the shapes involved along every one of their respective axis. 
                This <a href="https://www.youtube.com/watch?v=7Ik2vowGcU0&t=1946s&ab_channel=javidx9">video</a>, by <i>Javidx9</i>, is an 
                excellent source to understand the algorithm.
                
                


            </p>

            <h3>Collision Solving</h3>
            <p>
                To create a Physics Engine, it isn't enough to detect collisions, you also have to resolve them. However, you can't simply displace the objects 
                to avoid them to phase through each other. You actually need to figure out important data like : <span>the point of collision, 
                the current motions of the respective objects, their material type, their mass, etc.</span> Then you need to take this information and resolve the collision
                without making Newton rise out of his grave. 
            </p>
            <p>  
                At first, it was a massive headache for us because <span>it looked SOOOO complicated</span>. 
                But in the deep abyss of the internet we managed to find this sacred document : <a href="https://www.chrishecker.com/images/e/e7/Gdmphys3.pdf">
                https://www.chrishecker.com/images/e/e7/Gdmphys3.pdf
                </a>. This incredible piece of wisdom, by <i>Chris Hecker</i>, goes over the hard mathematical reality of collisions of polygons. It is a very digestable 
                and interesting piece of media that I can't recommend enough. We had to tweak and change a big part of the algorithm presented by <i>Chris Hecker</i> to fit our 
                needs. However, the core concepts used are a programming representation of Chris' work. The results speak for themselves :
                <video controls><source src={movieCollisionSolving}></source></video>
            </p>
            <h3>Fluid Dynamics</h3>
            <p>
                After implementing the above parts, I still had a little bit of time to kill before the presentation of <span>Not a Sandbox</span>.
                So I decided to dive into complicated stuff : fluids. I had no prior familiarity with the the physics behind fluid dynamics, so, it was a completely
                new experience for me. The research aspect of this feature involved figuring out the <span>Navier-Stokes equations</span>. These equations are the fondamental
                building blocks of our current understanding of how fluids work. Sadly, after much time working with them, I have to say that I still have a very basic
                grasp of the <span>Navier-Stokes equations</span> (mostly thanks to this <a href="https://www.youtube.com/watch?v=ERBVFcutl3M">
                youtube video</a> by <i>Numberphile</i>).
            </p>

            <p>
                My implementation of the fluid simulation has been simplified by isolating it. Therefore, <span>Not A Sandbox</span> doesn't allow the 
                combination of the fluid simulation and the rigidbody simulation. This choice was made early on during the development, because, as a short projet,
                we wanted to keep it simple. The simulation is <span>particle based</span> and takes place in an isolated box where the user can change the amount of fluid and the gravity.
            </p>
            <p>
                Because of our unique needs, I had to cross-reference many sources to acquire the necessary informations. These sources were the most important :
                <ol>
                    <li><a href="https://peeke.nl/simulating-blobs-of-fluid">Simulating blobs of fluid</a>, from Peeke, is a dumbed down interpretation 
                    of the Navier-Stokes equations. It is a great start for newcomers like me</li>
                    <li><a href="http://www.ligum.umontreal.ca/Clavet-2005-PVFS/pvfs.pdf">Particle-based Viscoelastic Fluid Simulation</a> , by 
                    Simon Clavet, Philippe Beaudoin, and Pierre Poulin, is a very well researched paper from <i>UDM</i>. Appart from beeing very technical and a bit too
                    complicated for a CEGEP student, it was another great look at a function project of fluid simulation!</li>
                    <li><a href="https://www.diva-portal.org/smash/get/diva2:676516/FULLTEXT01.pdf">Interactive 2D Particle-based Fluid Simulation for Mobile Devices</a>
                    , from Daniel Mansson, was the most important paper. It contains copious amount of details about every step of the process to create a real time
                     optimised fluid simulation.
                    I really recommend this read for anyone trying to dive into fluids, it is really good (it even contains pseudocode!).
                    </li>
                </ol>
            </p>

            This was the first result after a couple of unsuccesful attempt : 
            <video controls><source src={movieFluidSimulation}></source></video>
            Pretty cool :))

            <h2>Programs/Tools</h2>
            <h5>From scratch but not "really" from scratch</h5>
            <p>
                <h3>For programming</h3>
                    <ul>
                        <li><a href="https://unity.com/fr">Unity</a></li>
                        <li><a href="https://github.com/">Github</a></li>
                    </ul>

                <h3>Art Making</h3>
                    <ul>
                        <li><a href="https://www.gimp.org/downloads/">Gimp</a></li>
                    </ul>
            </p>

                

            <h2>Things I learned</h2>
            <p>
                <span>I learned about TEAMWORK.</span> I wasn't used to working alongside other programmers because my other projects consisted mainly
                of personnel stuff. So, for the short 5 month that <span>Not A Sandbox</span> lasted, I had to learn to adapt. I had to accept the 
                diverging opinions, the differents abilities and the different interests of my teammates. At the end, it was a real pleasure working with them, 
                and a very fruitful experience. 
            </p>

            <p>
                <span>I learned about PHYSICS.</span> Students often ask about the real use of what they learn in class. This is the real use of physics class!
                I learned a lot from turning the theory into practice. I now understand much more the fundamental principles of newtonian motions!
            </p>




            <h2>Download</h2>
            <p>
                <span>Not A Sandbox</span>'s build is available for Windows' platforms only
                <ul>
                    <li>For the functionnal build :</li>
                    <li>For the Github repo : <a href="https://github.com/P-B3117/Epic_project.git">https://github.com/P-B3117/Epic_project.git</a></li>
                    <li>For the complete document of my scientific part (in french) : <a href="https://docs.google.com/document/d/1nOGkvZa_MkgeXtLxxSsK4pTfUSH3R8DZxHDnAe4TeM8/edit?usp=sharing">https://docs.google.com/document/d/1nOGkvZa_MkgeXtLxxSsK4pTfUSH3R8DZxHDnAe4TeM8/edit?usp=sharing</a></li>
                    <li>For my video explaining my scientific part (in french) : <a href="https://www.youtube.com/watch?v=Eb09ooMk8_Y">https://www.youtube.com/watch?v=Eb09ooMk8_Y</a></li>
                </ul>
            </p>




            <h2>Useful ressources</h2>
            <p>
                All the important sources for the project and additionnal reading!
                <ul>
                    <li>Clavet, Simon, et al. “Particle-based Viscoelastic Fluid Simulation.” ligum, 2005, http://www.ligum.umontreal.ca/Clavet-2005-PVFS/pvfs.pdf.</li>
                    <li>Gaul, Randy. “How to Create a Custom 2D Physics Engine: Friction, Scene and Jump Table.” Game Development, 2013, https://gamedevelopment.tutsplus.com/tutorials/how-to-create-a-custom-2d-physics-engine-friction-scene-and-jump-table--gamedev-7756</li>
                    <li>Javidx9. “Convex Polygon Collision.” YouTube, 2019, https://www.youtube.com/watch?v=7Ik2vowGcU0&t=1946s&ab_channel=javidx9</li>
                    <li>Motrichuk, Alexander, and Paul Bourke. “Polygons, Meshes.” Paul Bourke, 1997, http://paulbourke.net/geometry/polygonmesh/</li>
                    <li>“Navier-Stokes Equations - Numberphile.” YouTube, 27 August 2019, https://www.youtube.com/watch?v=ERBVFcutl3M&ab_channel=Numberphile</li>
                    <li>Peeke. “Simulating blobs of fluid.” Peeke.nl, https://peeke.nl/simulating-blobs-of-fluid</li>
                    <li>Penner, Robert. Simulation de corps rigides, http://www2.ift.ulaval.ca/~dupuis/Modelisation%20et%20animation%20par%20ordinateur%20IFT-66819%20et%20IFT-22726/Simulation%20de%20corps%20rigides/Simulation%20de%20corps%20rigides.pdf</li>
                    <li>Seifert, Michael. “How to calculate the moment of inertia of convex polygon? (two-dimensions).” Physics Stack Exchange, 16 May 2022, https://physics.stackexchange.com/questions/708936/how-to-calculate-the-moment-of-inertia-of-convex-polygon-two-dimensions</li>
                    <li>Souto, Nilson. “Video Game Physics Tutorial - Part III: Constrained Rigid Body Simulation.” Toptal, 2018, https://www.toptal.com/game/video-game-physics-part-iii-constrained-rigid-body-simulation</li>
                    <li>Souto, Nilson. “Video Game Physics Tutorial - Part I: Rigid Body Dynamics.” Toptal, https://www.toptal.com/game/video-game-physics-part-i-an-introduction-to-rigid-body-dynamics</li>
                    <li>Thompson, Jeffrey. “Collision Detection.” Collision Detection, https://www.jeffreythompson.org/collision-detection/poly-circle.php</li>
                </ul>
            </p>
           
        </div>
        
    );
}