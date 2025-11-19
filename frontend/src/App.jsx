import React from 'react';
import './App.css';
import Home from "../src/pages/Home";
import AddFruitsPage from "./pages/AddFruitPage";
import FruitListPage from "./pages/FruitListPage";
import { BrowserRouter,Routes,Route } from 'react-router-dom';

// import FruitList from './components/Fruits';
// import Game from "../src/components/Game"

const App = () => {
  return (
    // <div style={{ textAlign: "center" }}>
    //   <h2 style={{ color: "white" }}>Jetpack Joyride Prototype</h2>
    //   <Game />
    //   <FruitList/> 
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add_fruit" element={<AddFruitsPage/>} />
        <Route path="/fruits" element={<FruitListPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;