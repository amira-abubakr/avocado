import './App.css'
import About from './components/About/About.jsx'
import Categories from './components/Categories/Categories.jsx'
import Footer from './components/Footer/Footer.jsx'
import Hero from './components/Hero/Hero.jsx'
import Nav from './components/Navbar/Nav.jsx'
import ContactUs from './components/Contact/ContactUs.jsx'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Guacamole from "./Pages/CategoryPage.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import ScrollToTop from "./ScrollToTop.jsx";
import ShoppingCartProvider from './context/ShoppingCartContext.jsx'
import Login from './Pages/Login.jsx'
import Signup from './Pages/SignUp.jsx'
import { AuthProvider } from "./context/AuthContext.jsx";
import CategoryPage from './Pages/CategoryPage.jsx'


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
            <Route path="/category/:id" element={<CategoryPage />} />
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
