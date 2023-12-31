import { useEffect, useState } from "react";
import CustomLink from "../HelperModules/CustomLink";
import "./IndexModule.css"

//React Module that renders 
// the Navigation Bar on the Left (big viewport width)
// OR
// The Hamburger up right (small viewport width)
export default function IndexModule({isDropDown, setIsDropDown, isScreenShort}){

    let radius = 5;
    
    const [indexModuleClass, setIndexModuleClass] = useState("indexmodule");

    //Set the good className of the React Module based on the state of DROPDOWN and SCREENSHORT
    useEffect(()=>{
        if(isDropDown && isScreenShort){
            setIndexModuleClass("indexmodule_short");
        }
        else if(isScreenShort){
            setIndexModuleClass("indexmodule_short_hidden");
        }
        else{
            setIndexModuleClass("indexmodule");
        }
    }, [isScreenShort, isDropDown]);

    //Close drop down if screenWidth becomes big
    useEffect(()=>{
        if(!isScreenShort){
            setIsDropDown(false);
        }
    }, [isScreenShort]);


    return(
        <div className={indexModuleClass}>
            <ul className="indexmodule_list">
                <ul>
                    Info
                    <IndexModuleLink to={"/"} name={"About"}/>
                    <IndexModuleLink to={"/donate"} name={"Donate"}/>
                </ul>
                <ul>
                    Games
                    <IndexModuleLink to={"/notasandbox"} name={"Not A Sandbox"}/>
                    <IndexModuleLink to={"/blackjackcoop"} name={"BlackJack Coop"} />
                    <IndexModuleLink to={"/programmer101"} name={"Programmer 101"} />
                    <IndexModuleLink to={"/thegame"} name={"The Game"} />
                    <IndexModuleLink to={"/apagos"} name={"Apagos"} />
                </ul>
                <ul>
                    Softwares
                    <IndexModuleLink to={"/testingdirectx11"} name={"Testing DirectX11"}/>
                </ul>
                <ul>
                    Webpages
                    <IndexModuleLink to={"/louismenagerie"} name={"Louis' Menagerie"}/>
                </ul>
                <ul>
                    Processing Shenanigans
                    <IndexModuleLink to={"/nba2k"} name={"N-B-A 2k20"}/>
                    <IndexModuleLink to={"/rpg"} name={"The Boring RPG"}/>
                    <IndexModuleLink to={"/td"} name={"A-Political TD"}/>
                </ul>
                <ul>
                    Humble Console Beginning
                    <IndexModuleLink to={"/consolesnake"} name={"Snake!!"}/>
                    <IndexModuleLink to={"/consolecalculator"} name={"Calculator"}/>
                    <IndexModuleLink to={"/consolehangman"} name={"Hangman"}/>
                </ul>
            </ul>
        </div>
    );



    //Helper functions to simplify the JSX
    function onClick(){
        setIsDropDown(false);
        
    }
    function IndexModuleLink({to, name}){
        return (
            <CustomLink to={to} name={name} radius={radius} onClick={onClick}/>
        );
    }
}


