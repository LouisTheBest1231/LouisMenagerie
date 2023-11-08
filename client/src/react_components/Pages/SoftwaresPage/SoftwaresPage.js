
import ProjectModule from "../../ProjectModule/ProjectModule";
import "./SoftwaresPage.css"

export default function SoftwaresPages(){
    return (
        <div className="softwarespage">
            <div className="softwarespage_title">{">> "}SOFTWARES</div>

            <div className="softwarespage_content">
                
                <div className="softwarespage_subtitle">
                    <div>
                        <div>A little taste of the softwares I developped</div>
                        <br/>
                        <div> Click on them for more informations!</div>
                    </div>
                    
                </div>
            
                <div className="softwarespage_modules">
                    {GetModuleList(20).map(function(o){
                        return o
                    })}
                </div>
            
            </div>
            
        </div>
    );
}

//FOR TEST ONLY
function GetModuleList(number){
    const list = []
    for(let i =0; i < number ;i++){
        list.push(<ProjectModule number={i}/>);
    }
    return list;
}