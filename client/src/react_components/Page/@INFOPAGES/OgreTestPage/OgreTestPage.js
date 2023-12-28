import Warning from "../../../HelperModules/Warning/Warning";



export default function OgreTestPage(){
    return (
        <div className="contentpage">

            <h1>Testing DirectX11</h1>
            <video controls><source src="https://www.louismenagerie.com/videos/video_testingdirectx11_1.mp4"></source></video>



            <h2>Description</h2>
            <h5>Tests! Woohoo!</h5>
            <p>
                To be honest, <span>Testing DirectX11</span> isn't really a software, it isn't even a game either. <span>Testing DirectX11</span> is more 
                like (like the name implied) a testing ground for the <a href="https://www.microsoft.com/en-ca/download/details.aspx?id=17431">DirectX11</a> API. It is composed of a scene where 
                a camera (the user) can navigate in a 3D environnment and observe different 3D phenomenons made with the API.
            </p>
            <p>
                This 'testing scene' was made in pure programming with the <i>DirectX11</i> API and the <i>Win32</i> API. You can see it 
                as an exploration of the tools for 3D graphics
            </p>

           

            <h2>Things I learned</h2>
            <h5>The world of computer graphics is fascinating!</h5>
            <p>
                <span>I learned about the MATH behind computer graphics.</span>. I made a lot of discoveries about the fundamental concepts of computer 3D graphics : <span>matrices, 
                    vertices, indexes, normal maps, etc.</span> One of the most interesting subject was the lighting calculations <span>(specular, diffuse, ambient)
                        </span> and their integration into shaders. This little project was an eye-opening experience. 
            </p>
            <p>
                        I really recommend this video series, made by YouTube 
                        creator <a href="https://www.youtube.com/@javidx9">javidx9</a> : <a href="https://www.youtube.com/watch?v=ih20l3pJoeU">https://www.youtube.com/watch?v=ih20l3pJoeU</a>.
                        The videos are a really good deep dive into the very basics of 3D graphics by creating a <span>Game Engine from scratch!</span> Very impressive stuff! <br></br>
                        Another great ressource is the OpenGL tutorial : <a href="https://learnopengl.com/">Learn OpenGL</a>. <span>However, the single best learning reference 
                        is this</span> <a href="https://www.youtube.com/watch?v=_4FArgOX1I4">video series</a> by <a href="https://www.youtube.com/@ChiliTomatoNoodle">ChiliTomatoNoodle</a>. If you can
                        get past his really dry (but great) sense of humour, you get access to a lot of valuable informations!
            </p>
            <p>
                <span>I learned a little more about GPU architecture.</span> <i>Directx11</i> force you to interact on a low-level
                basis with the GPU (for example : loading shaders), because <span>3D graphics are really GPU intensive.</span> For this reason, this project was a very good starting point
                to learn more about GPUs.
            </p>


            <h2>Programs/Tools</h2>
            <h5>From scratch but not "really" from scratch</h5>
            <p>
                <h3>For programming</h3>
                    <ul>
                        <li><a href="https://visualstudio.microsoft.com/fr/">Visual Studio</a></li>
                        <li><a href="https://www.microsoft.com/en-ca/download/details.aspx?id=17431">Directx11</a></li>
                        <li><a href="https://learn.microsoft.com/en-us/windows/win32/api/">Win32L</a></li>
                    </ul>
            </p>


            <h2>Download</h2>
            <Warning message={<div>I haven't been able to produce a functionning build of this project, ooops! You can still access the project's files</div>}/>
            <p>
                
                <ul>
                    <li>For the project's files : <a href="https://ulavaldti-my.sharepoint.com/:u:/g/personal/lemes3_ulaval_ca/ESdjUhOD65RApk2B5gM2L1UBNlxvQycnPkp_xX6LCCZFTQ?download=1">download</a></li>
                </ul>
            </p>

        </div>
    );
}