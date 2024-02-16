import "./App.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

import Error from "./pages/Error";
import HomePage from "./pages/Homepage";
import About from "./pages/About";
import Details from "./pages/Details";
import SortedByCity from "./pages/Madrid";
import SortedByCityB from "./pages/Berlin";
import SortedByCityP from "./pages/Paris";

import Sidebar from "./components/Sidebar";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />

      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:detailsId" element={<Details />} />
        <Route path="/madrid" element={<SortedByCity />} />
        <Route path="/paris" element={<SortedByCityP />} />
        <Route path="/berlin" element={<SortedByCityB />} />

        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
