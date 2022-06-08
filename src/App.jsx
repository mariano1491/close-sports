import NavBar from "./components/NavBar/NavBar";
import "./components/NavBar/navbar.css"
import IntemListContainer from "./components/ItemListContainer/ItemListContainer";


function App() {
  return (
    <div className="App">
    <header className="App-Header">
   <h1 className='logo'><span className='logoClose'>Close</span> Sports</h1>
    <NavBar/>
  <IntemListContainer greet="Tienda deportiva" color="white"/>
    </header>
    </div>
  );
}

export default App;
