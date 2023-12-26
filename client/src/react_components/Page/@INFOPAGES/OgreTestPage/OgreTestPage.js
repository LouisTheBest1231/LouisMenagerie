


export default function OgreTestPage(){
    return (
        <div className="contentpage">

            <h1>Testing Ogre</h1>


            <h2>Description</h2>
            <h5>Sadly, the project isn't about Shrek</h5>
            <p>
                To be honest, <span>Testing Ogre</span> isn't really a software, it isn't even a game either. <span>Testing Ogre</span> is more 
                like (like the name implied) a testing ground for the <a href="https://www.ogre3d.org/">Ogre3D</a> API. It is composed of a scene where 
                a camera (the user) can navigate in a 3D environnment and observe different 3D phenomenons made with the API.
            </p>
            <p>
                This 'testing scene' was made in pure programming with <i>Ogre3D</i> a very low-level wrapper of the <i>OpenGL</i> API. You can see it 
                as an exploration of the tools for 3D graphics
            </p>

           

            <h2>Things I learned</h2>
            <h5>The world of computer graphics is fascinating!</h5>
            <p>
                <span>I learned about the MATH behind computer graphics.</span> Because <i>Ogre3D</i> is essentially a wrapper for the very low-level <i>OpenGL</i> API,
                I had to research <i>OpenGL</i> itself. I made a lot of discoveries about the fundamental concepts of computer 3D graphics : <span>matrices, 
                    vertices, indexes, normal maps, etc.</span> One of the most interesting subject was the lighting calculations <span>(specular, diffuse, ambient)
                        </span> and their integration into shaders. This little project was an eye-opening experience. I really recommend this video series, made by YouTube 
                        creator <a href="https://www.youtube.com/@javidx9">javidx9</a> : <a href="https://www.youtube.com/watch?v=ih20l3pJoeU">https://www.youtube.com/watch?v=ih20l3pJoeU</a>.
                        The videos are a really good deep dive into the very basics of 3D graphics by creating a <span>Game Engine from scratch!</span> Very impressive stuff! <br></br>
                        Another great ressource is the OpenGL tutorial : <a href="https://learnopengl.com/">Learn OpenGL</a>
            </p>
            <p>
                <span>I learned a little more about GPU architecture.</span> <i>Ogre3D</i> and, by extension, <i>OpenGL</i>, force you to interact on a low-level
                basis with the GPU (for example : loading shaders), because <span>3D graphics are really GPU intensive.</span> For this reason, this project was a very good starting point
                to learn more about GPUs.
            </p>


            <h2>Programs/Tools</h2>
            <h5>From scratch but not "really" from scratch</h5>
            <p>
                <h3>For programming</h3>
                    <ul>
                        <li><a href="https://visualstudio.microsoft.com/fr/">Visual Studio</a></li>
                        <li><a href="https://www.ogre3d.org/">Ogre3D</a></li>
                        <li><a href="https://www.opengl.org/">OpenGL</a></li>
                    </ul>
            </p>


            <h2>Download</h2>
            <p>
                <span>Testing Ogre</span>'s build is available for Windows' platforms only
                <ul>
                    <li>For the functionnal build : </li>
                </ul>
            </p>

        </div>
    );
}