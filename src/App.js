
import './App.css';
import Navbar from './components/Navbar'
import Productos from './view/Filtroproductos'
import Home from './view/Home'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
         <Route path='/'element={<Productos/>}/>
         <Route path='/'element={<Home/>}/>


      </Routes>
      
      
    </div>
  );
}

export default App;
