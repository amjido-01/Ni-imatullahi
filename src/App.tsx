import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HamburgerMenu } from './components/ui/HamburgerMenu';
import { Home } from './pages/Home';
// import { Navbar } from './components/ui/Navbar';
function App() {

  return (
    <BrowserRouter>
      <div>
         {/* <Navbar /> */}
        <HamburgerMenu />
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
