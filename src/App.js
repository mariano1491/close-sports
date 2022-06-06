import NavBar from "./components/NavBar/NavBar.js";
import "./components/NavBar/navbar.css"


function App() {
  return (
    <div className="App">
    <header className="App-Header">
   <h1 className='logo'><span className='logoClose'>Close</span> Sports</h1>
    <NavBar/>
    </header>
    </div>
  );
}

export default App;
