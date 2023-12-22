import Warning from "../../../HelperModules/Warning/Warning";


export default function LouisMenagerieApp(){
    return (
        <div className="contentpage">
            <h1>Louis' Menagerie</h1>
            
            <Warning message={<div>Louis' Menagerie's layout was heavily inspired from the website <a href="https://reactrouter.com/en/main">React Router Dom</a>.
            I thought that <a href="https://reactrouter.com/en/main">React Router Dom</a>'s layout looked simple enough for a webdev newbie but effective. So, I used it as a visual template</div>}/>
            <h2>Description</h2>
            <p></p>

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