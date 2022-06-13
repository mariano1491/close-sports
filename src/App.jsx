import NavBar from "./components/NavBar/NavBar";
import "./components/NavBar/navbar.css"
import IntemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/itemCount/ItemCount";


function App() {
  return (
    <div className="App">
    <header className="App-Header">
   <h1 className='logo'><span className='logoClose'>Close</span> Sports</h1>
    <NavBar/>
  <IntemListContainer greet="Tienda deportiva" color="white"/>
  
    </header>
    <ItemCount stock={10} initial= {1}/>
    </div>
  );
}

export default App;
