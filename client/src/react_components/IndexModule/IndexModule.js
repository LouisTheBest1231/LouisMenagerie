import { useEffect, useState } from "react";
import CustomLink from "../HelperModules/CustomLink";
import "./IndexModule.css"


export default function IndexModule({isDropDown, setIsDropDown, isScreenShort}){

    let radius = 5;
    
    const [indexModuleClass, setIndexModuleClass] = useState("indexmodule");
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
                    <IndexModuleLink to={"/testingogre"} name={"Testing Ogre"}/>
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
                    <IndexModuleLink to={"/consoletetrix"} name={"Tetris"}/>
                    <IndexModuleLink to={"/consolehangman"} name={"Hangman"}/>
                </ul>
            </ul>
        </div>
    );


    function onClick(){
        setIsDropDown(false);
        
    }
    function IndexModuleLink({to, name}){
        return (
            <CustomLink to={to} name={name} radius={radius} onClick={onClick}/>
        );
    }
}


