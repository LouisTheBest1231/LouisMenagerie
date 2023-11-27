import CustomLink from "../HelperModules/CustomLink";
import "./IndexModule.css"

export default function IndexModule(){

    let radius = 5;
    return(
        <div className="indexmodule">
            <ul className="indexmodule_list">
                <ul>
                    Info
                    <CustomLink to={"/"} name={"About"} radius={radius}/>
                    <CustomLink to={"/donate"} name={"Donate"} radius={radius}/>
                </ul>
                <ul>
                    Games
                    <CustomLink to={"/notasandbox"} name={"Not A Sandbox"} radius={radius}/>
                    <CustomLink to={"/blackjackcoop"} name={"BlackJack Coop"} radius={radius}/>
                    <CustomLink to={"/programmer101"} name={"Programmer 101"} radius={radius}/>
                    <CustomLink to={"/thegame"} name={"The Game"} radius={radius}/>
                    <CustomLink to={"/apagos"} name={"Apagos"} radius={radius}/>
                </ul>
                <ul>
                    Softwares
                    <CustomLink to={"/testingogre"} name={"Testing Ogre"} radius={radius}/>
                </ul>
                <ul>
                    Webpages
                    <CustomLink to={"/louismenagerie"} name={"Louis' Menagerie"} radius={radius}/>
                </ul>
                <ul>
                    Processing Shenanigans
                    <CustomLink to={"/nba2k"} name={"N-B-A 2k20"} radius={radius}/>
                    <CustomLink to={"/rpg"} name={"The Boring RPG"} radius={radius}/>
                    <CustomLink to={"/td"} name={"A-Political TD"} radius={radius}/>
                </ul>
                <ul>
                    Humble Console Beginning
                    <CustomLink to={"/consolesnake"} name={"Snake!!"} radius={radius}/>
                    <CustomLink to={"/consolecalculator"} name={"Calculator"} radius={radius}/>
                    <CustomLink to={"/consoletetrix"} name={"Tetris"} radius={radius}/>
                    <CustomLink to={"/consolehangman"} name={"Hangman"} radius={radius}/>
                </ul>
            </ul>
        </div>
    );
}


