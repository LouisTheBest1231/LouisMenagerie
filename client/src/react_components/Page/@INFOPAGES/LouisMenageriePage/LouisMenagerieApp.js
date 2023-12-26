import Warning from "../../../HelperModules/Warning/Warning";
import logoDark from "../../../Navbar/images/traceDark.svg"
import logoLight from "../../../Navbar/images/traceLight.svg"

export default function LouisMenagerieApp(){
    return (
        <div className="contentpage">
            <h1>Louis' Menagerie</h1>
            
            <Warning message={<div>Louis' Menagerie's layout was heavily inspired from the website <a href="https://reactrouter.com/en/main">React Router Dom</a>.
            I thought that <a href="https://reactrouter.com/en/main">React Router Dom</a>'s layout looked simple enough for a webdev newbie but effective. So, I used it as a visual template</div>}/>
            
            <img  className="navbar_img_dark"src={logoDark} alt="Logo of Louis' Menagerie"/>
            <img className="navbar_img_light" src={logoLight} alt="Logo of Louis' Menagerie"/>
            
            
            <h2>Description</h2>
            <h5>It is indeed the website you are on!</h5>
            <p>
                <span>Louis' Menagerie</span> is a simple website that acts as a platform to share my weird projects and doubles as a portfolio. 
                Yes, <span>IT IS</span> the website you are currently on! It is currently much a static page, but I am planning on slowly converting
                it into a Full Stack Website to learn more! It is my first real experience of working in WebDev and is still underdevelopment, 
                so if there is any bug, this is why :)
            </p>


            <h2>Things I learned</h2>
            <h5>Man, WebDev is much more difficult than I though</h5>
            <p>
                <span>I learned about HTML/CSS/JAVASCRIPT.</span> I had previously done some projects in Javascript, but it was my first complete project
                with the <i>BIG THREE</i> of web development. For a guy that was used to programming in C++/C#/Java, HTML/CSS/JAVASCRIPT is a real
                paradigm shift. 
            </p>
            <p>
                <span>I learned about REACT.</span> After much deliberation, I decided to use the <a href="https://react.dev/">React</a> framework
                . <a href="https://react.dev/">React</a> not only makes the development faster, It allows for easier modulation of the project to make it 
                more comprehensible and easier to maintain. I think it was a necessary addition to make the website more dynamic.
            </p>
            <p>
                <span>I learned about HEROKU.</span> The whole point of Webdev is to create something accessible in the <span>World Wide Web</span>. So, I had
                to learn about the ways of publishing a website. <a href="https://www.heroku.com/">Heroku</a> is one of those services. It supports <i>Node.js</i> and <i>React</i>,
                the building blocks of my website. It also allows for rapid deployment based on a Github project for a fair price. Pretty neat service!
            </p>


            <h2>Programs/Tools</h2>
            <h5>From scratch but not "really" from scratch</h5>
            <p>
                <h3>For programming</h3>
                    <ul>
                        <li><a href="https://react.dev/">React</a></li>
                        <li><a href="https://louismenagerie-7ab6b928b594.herokuapp.com/">Visual Studio Code</a></li>
                        <li><a href="https://nodejs.org/en">Node.js</a></li>
                    </ul>

                <h3>For hosting the website</h3>
                    <ul>
                        <li><a href="https://www.heroku.com/">Heroku</a></li>
                    </ul>

                <h3>Art Making</h3>
                    <ul>
                        <li><a href="https://www.gimp.org/downloads/">Gimp</a></li>
                    </ul>
            </p>

            <h2>Link</h2>
            <p>
                <ul>
                    <li>To reach this website : <a href="https://louismenagerie-7ab6b928b594.herokuapp.com/">
                    https://louismenagerie-7ab6b928b594.herokuapp.com/</a></li>
                </ul>
            </p>
        </div>
    );
}