import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Works } from './pages/Works';
import { Cv } from './pages/Cv';
import { Graphics} from './pages/Graphics';
function App() {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/works' element={<Works />}/>
          <Route path='/graphics' element={<Graphics />}/>
          <Route path='/cv' element={<Cv />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
