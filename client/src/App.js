
import {useState } from "react";
import "./index.css"
import IndexModule from "./react_components/IndexModule/IndexModule";
import Navbar from "./react_components/Navbar/Navbar";
import Page from "./react_components/Page/Page";
import useScreenShort from "./react_components/HelperModules/useScreenShort";

function App() {


  const [isDropDown, setIsDropDown] = useState(false)


  function toggleDropDown(){
    setIsDropDown(!isDropDown)
  }

  return (
    <div className="app">
      

          
      {<Navbar toggleDropDown={toggleDropDown}setIsDropDown={setIsDropDown} isDropDown={isDropDown}/>}
      {<IndexModule setIsDropDown={setIsDropDown} isDropDown={isDropDown} isScreenShort={useScreenShort()}/>}
      <div className={useScreenShort() ? "not_fixed_short" : "not_fixed"}> 
        {!isDropDown &&<Page/>} 
      </div>


    </div>




  );
}

export default App;
