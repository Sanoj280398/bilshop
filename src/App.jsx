/* import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router'
import Layout from './components/Layout'
import Home from './components/Home'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
    <Router>
      <Layout />
      <Route path='/' index element={<Home />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Register' element={<Register />} />
    </Router>
  )
}

export default App */

import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/footer.jsx";
import Home from "./components/Home.jsx";
import Catalog from "./pages/catalog.jsx";
import Contact from "./pages/contact.jsx";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biler" element={<Catalog />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

