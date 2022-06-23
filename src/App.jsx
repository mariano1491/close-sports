import NavBar from "./components/NavBar/NavBar";
import "./components/NavBar/navbar.css"
import IntemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/itemCount/ItemCount";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App mx-auto">
      <BrowserRouter>
      <header className="App-Header">
   <h1 className='logo'><span className='logoClose'>Close</span> Sports</h1>
   <NavBar/>
    </header>
      
      <Routes>
        <Route path='/' element= { <IntemListContainer saludo="Tienda deportiva" color="white"/>}></Route>
      <Route path ='/plant/:itemId' element ={<ItemDetailContainer greeting="Detalles de los productos"/>}></Route>
      </Routes>
      </BrowserRouter>
    
    
    <ItemCount stock={10} initial= {1}/>
    </div>
  );
}

export default App;
