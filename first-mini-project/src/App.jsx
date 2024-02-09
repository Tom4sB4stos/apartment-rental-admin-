
import './App.css'
import NavBar from "./components/Navbar"
import Footer from "./components/Footer"

import Error from "./pages/Error"
import HomePage from './pages/Homepage'
import About from './pages/About'
//import Sidebar from "./components/Sidebar"

import { Routes, Route } from "react-router-dom";
function App() {
 

  return (
    <div>
    <NavBar/>
   <Routes>
   <Route path="/" element={<HomePage />} />
   <Route path="/about" element={<About />} />

   <Route path= "*" element={<Error/>}/>
   </Routes>
   <Footer/>
    </div>
  
  )
}

export default App
