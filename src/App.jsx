import './App.css'
import About from './components/About/About.jsx'
import Categories from './components/Categories/Categories.jsx'
import Footer from './components/Footer/Footer.jsx'
import Hero from './components/Hero/Hero.jsx'
import Nav from './components/Navbar/Nav.jsx'
import ContactUs from './components/Contact/ContactUs.jsx'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Guacamole from "./Pages/Guacamole.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import ShoppingCartProvider from './context/ShoppingCartContext.jsx'
import Login from './Pages/Login.jsx'
import Signup from './Pages/SignUp.jsx'
import { AuthProvider } from "./context/AuthContext.jsx";


function Layout({ children }) {
  const location = useLocation();

  // إخفاء الناف والفوتر في صفحة /login
  const hideLayout = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideLayout && <Nav />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <AuthProvider>

    <ShoppingCartProvider>
      <Router>
        <Layout>
          <Routes>
            {/* الصفحة الرئيسية */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Categories />
                  <ContactUs />
                </>
              }
            />

            {/* باقي الصفحات */}
            <Route path="/guacamole" element={<Guacamole />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Layout>
      </Router>
    </ShoppingCartProvider>
    </AuthProvider>
  )
}

export default App
