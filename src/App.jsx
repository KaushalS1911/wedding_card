import './App.css'
import Home from "./pages/HomePage/home.jsx";
import Footer from './components/global/Footer'
import Navbar from './components/global/navbar'
import Favorites from "./pages/myprofile/favorites.jsx";
import TemplatePage from "./pages/templatePage.jsx";
import About from './pages/About.jsx';
import {Route, Routes, useLocation} from 'react-router-dom';
import {createContext, useEffect, useState} from 'react';
import Blog from './pages/Blog.jsx';
import ContactPage from "./pages/contactPage.jsx";
import Invitations from "./pages/invitations.jsx";
import Card from './pages/Card.jsx';
import InvitationCard from './components/Invitation/InvitationCard .jsx';
import SingleBlog from "./components/blog/singleBlog.jsx";
import OAuthSuccess from "./components/login/OAuthSuccess.jsx";
import GoPremium from "./components/Premium/goPremium.jsx";
import Login from "./components/login/login.jsx";
import axiosInstance from "./Instance.jsx";
// import Editor from './components/Editor/Editor.jsx';
export const LoginContext = createContext()

export const isLogin = () => {
  const token = sessionStorage.getItem("token");
  if(token) {
    return true
  }else {
    return false
  }
}

function App() {
  const [openLoginPage, setOpenLoginPage] = useState(false);
  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }

  const location = useLocation();
  const hideHeaderFooter = location.pathname.startsWith('/editor');

  useEffect(() => {
    axiosInstance.get("/api/auth/me")
        .then((response) => {
          const userData = response.data?.data;
          if (userData) {
            sessionStorage.setItem("user", JSON.stringify(userData));
          }
        })
        .catch((error) => {
          console.log("Error fetching user data:", error);
        });
  }, []);

  return (
    <>
      <ScrollToTop />
      <LoginContext.Provider value={{openLoginPage, setOpenLoginPage}}>
      {!hideHeaderFooter && <Navbar />}
      {/* <Favorites /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/cards' element={<Card />} />
        <Route path='/invitations' element={<Invitations />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/template-page' element={<TemplatePage />} />
        <Route path='/template-page/invitation-card/:id' element={<InvitationCard />} />
        <Route path='/singleblog' element={<SingleBlog />} />
        <Route path="/profile/*" element={<Favorites />} />
        {/*<Route path="/oauth-success" element={<OAuthSuccess setOpenLoginPage={setOpenLoginPage}/>}/>*/}
        <Route path="/premium" element={<GoPremium/>}/>
        {/* <Route path="/editor/:id" element={<Editor />} /> */}
      </Routes>
        <Login openLoginPage={openLoginPage} setOpenLoginPage={setOpenLoginPage} />
      {!hideHeaderFooter && <Footer />}
      </LoginContext.Provider>
    </>
  )
}

export default App