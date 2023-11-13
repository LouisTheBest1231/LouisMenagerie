
import "./index.css"
import IndexModule from "./react_components/IndexModule/IndexModule";
import Navbar from "./react_components/Navbar/Navbar";
import Page from "./react_components/Page/Page";

function App() {
  return (
    <div className="app">
      <div className="fixed">

          <div className="fixed_container">
            {<Navbar />}
            
            {<IndexModule />}
          </div>
  
      </div>
        
      <div className="not_fixed">
        <Page/>
      </div>


    </div>




  );
}

export default App;
