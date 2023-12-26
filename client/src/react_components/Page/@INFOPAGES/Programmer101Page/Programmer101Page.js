import Warning from "../../../HelperModules/Warning/Warning";



export default function Programmer101Page(){
    return (
        <div className="contentpage">
            <h1>Programmer 101</h1>

            <Warning message={<div>The soundtrack of this game was taken from <a href="https://hempuli.com/baba/">Baba Is You</a> because my younger self wanted music in the game,
            but was no composer. Check out <a href="https://hempuli.com/baba/">Baba Is You</a>, it is a great game :)</div>}  />

            <h2>Description</h2>
            <h5>This project is weird</h5>
            <p>
                <span>Programmer 101</span> is a learning game that guides the player through the basic fondamentals of programming (in french). This game was made as 
                my final IB project of highschool. It contains 10 levels where the player needs to complete a certain task by writing <span>indigenous code</span> in 
                an <span>indigenous code editor</span>. The levels range from moving a character though space to changing tile's color on a board.
                
            </p>
            <p>
                Because the goal of <span>Programmer 101</span> was to be a learning tool, I needed to implement thoughful game design. For this 
                reason, <span>Programmer 101</span> contains a learning curve that slowly introduces programming concepts to the player. The game 
                tackles <span>variables, functions, conditionnal statements and loops!</span> The game can feel clunky, because it was made in <a href="https://www.processing.org/">Processing</a>,
                but it holds up fairly well :).
            </p>
            

            <h2>Functionalities</h2>
                <h5>Weird game, weird functionalities</h5>
            <p>
                <h3>Homemade programming language</h3>
                <p>
                    I went to a Quebecois highschool, which mean that my targeted audience was french speaking people. For this reason, I made the choice to
                    create my own programming language, create my own text editor and create my own code parser. The programming language is very close to C# but <span>much more 
                    basic and in french</span> (ahahaha). The text editor was made from scratch using the basic <i>Processing</i> drawing capabilities. 
                    However, <span>the code parser was the most complicated aspect of development</span>. It forced me to think like a compiler by fragmenting the code and executing it by a well defined priority list.
                    The result was a fully fonctionnal programming language that was able to detect errors and allowed the player to interact with the level.
                </p>
                <h3>UI Design</h3>
                <p>
                    <a href="https://www.processing.org/">Processing</a>, can be used as a very rudimentary game engine. However it does not contain UI
                    modules. For this reason, I had to make plenty of UI modules (classes) to greatly facilitate the making of <span>Programming 101</span>. 
                    For example, I had to create a class for <span>images</span>, a class for <span>animated images</span>, a class for <span>buttons</span>, a class 
                    for <span>text editing</span>, etc.
                </p>
                <h3>Game Design</h3>
                <p>
                    <span>Programmer 101</span> strives to be a learning experience. So, to make it work as an educating game, I had to put myself in 
                    the place of a newcomer to programming. I had to develop the game around this mindset to avoid making to difficult and incomprehensible.
                    So, for every level, I had to do <span>Game Design!</span>.
                </p>
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
                    </ul>
            </p>


            <h2>Download</h2>
            <Warning message={<div><i>Processing</i> takes a long time to load audio files. This means that the game takes a while to launch, 
            don't be surprised!</div>}/>
            <p>
                <span>Programmer 101</span>'s build is available for Windows' platforms only
                <ul>
                    <li>For the functionnal build : </li>
                </ul>
            </p>
        </div>
    );
}