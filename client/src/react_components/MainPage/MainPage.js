import "./MainPage.css"

export default function MainPage(){
    return (
        <div className="mainpage">
            <div className="mainpage_title">{">> "}LOUIS' MENAGERIE</div>
            <div className="mainpage_maininfo">
                <p className="mainpage_maininfo_logo">
                   
                    ||\    /|<br/>
                    || \  / |<br/>
                    ||  \/  |<br/>
                    ||      |<br/>
                    ||      |<br/>
                    ||___   |<br/> 
                        
                </p>
                <div className="mainpage_maininfo_text">
                    This is a little menagerie of projects I have worked on as a student.
                    Feel free to explore, test and download anything you find interesting!
                    The projects are divided into 3 categories :

                    <span className="mainpage_maininfo_text_bullets">{">"}Softwares <br/>{">"}Games  <br/>{">"}Webpages<br/></span>
                    Have Fun :{")"}
                </div>
            </div>
        </div>
    );
}