import './App.css'
import Home from "./pages/HomePage/home.jsx";
import Footer from './components/global/Footer'
import Navbar from './components/global/navbar'
import Favorites from "./pages/myprofile/favorites.jsx";
import TemplatePage from "./pages/templatePage.jsx";
import About from './pages/About.jsx';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Blog from './pages/Blog.jsx';
import InvitationCard from './components/Invitation/InvitationCard .jsx';
import Card from './pages/Card.jsx';

function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/cards' element={<Card />} />
        <Route path='/' element={<TemplatePage />} />
        <Route path='/' element={<Favorites />} />
      </Routes>
      <Footer />
      <TemplatePage />
      {/* <InvitationCard /> */}
    </>
  )
}

export default App


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
// import Navbar from "./components/global/navbar.jsx";
// import Footer from "./components/global/Footer.jsx";

// // Pages


// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/trendings" element={<Trendings />} />
//         <Route path="/editings" element={<Editings />} />
//         <Route path="/celebrates" element={<Celebrates />} />
//         <Route path="/shares" element={<Shares />} />
//         <Route path="/inspirations" element={<Inspirations />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/template" element={<TemplatePage />} />
//         <Route path="/invitation" element={<Invitation />} />
//         <Route path="/favorites" element={<Favorites />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
