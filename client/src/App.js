
import {useState } from "react";
import "./index.css"
import IndexModule from "./react_components/IndexModule/IndexModule";
import Navbar from "./react_components/Navbar/Navbar";
import Page from "./react_components/Page/Page";
import useScreenShort from "./react_components/HelperModules/useScreenShort";


//Top Parent Object of the React Application
//***********Contains info about the state of the DropDown Menu
function App() {


  const [isDropDown, setIsDropDown] = useState(false)


  function toggleDropDown(){
    setIsDropDown(!isDropDown)
  }


  return (
    <div className="app">

      
      {<Navbar toggleDropDown={toggleDropDown}setIsDropDown={setIsDropDown} isDropDown={isDropDown}/>}
      {<IndexModule setIsDropDown={setIsDropDown} isDropDown={isDropDown} isScreenShort={useScreenShort()}/>}
      
      {/*Render the main components of the page conditionnally : 
        -anchored left (if the app is short and there is no IndexModule)
        -displace right (if the app is large enough for the IndexModule)
      */}
      <div className={useScreenShort() ? "not_fixed_short" : "not_fixed"}> 
        {/*De-Render the app if the DropDown Menu is active 
        -> Not very optimal, should probably just render the DropDown menu on top of the page : I need to look into that*/}
        {!isDropDown &&<Page/>} 
      </div>

    </div>
  );
}

export default App;
