import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HamburgerMenu } from './components/ui/HamburgerMenu';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Works } from './pages/Works';
import { Cv } from './pages/Cv'
import { Graphics} from './pages/Graphics' 
// import { Navbar } from './components/ui/Navbar';
function App() {

  return (
    <BrowserRouter>
      <div>
        <HamburgerMenu />

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
