import React, { useState } from "react";
import LOGO from "../../assets/images/logo.png";
import "./Nav.css";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Nav = () => {
  const { isAuthenticated } = useAuth();
  const { openCart, cartQuantity } = useShoppingCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Our Recipes", href: "#categories" },
    { name: "Contact Us", href: "#contactUs" }
  ];

  const dropdownItems = [
    "Guacamole",
    "Burgers & Sandwiches", 
    "Tacos & Burritos",
    "Salads & Bowls",
    "Avocado Toast",
    "Breakfast",
    "Heart Healthy",
    "Sauces & Spreads"
  ];

  return (
    <>
      <nav className="nav fixed top-0 left-0 w-100 z-50 transition-all">
        <div className="container d-flex align-items-center justify-content-between py-2">
          {/* Logo */}
          <a className="navbar-brand d-flex align-items-center gap-2 mb-0" href="#">
            <img src={LOGO} alt="Logo" style={{ height: "40px" }} />
            <p className="mb-0 fw-bold text-white">Avocado</p>
          </a>

          {/* Desktop Links - Hidden on mobile */}
          <ul className="navbar-nav d-none d-lg-flex flex-row gap-4 mb-0">
            {menuItems.map((item, index) => (
              <li key={index} className="nav-item">
                <a className="nav-link text-white" href={item.href}>
                  {item.name}
                </a>
              </li>
            ))}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menu
              </a>
              <ul className="dropdown-menu custom-dropdown shadow-lg border-0 rounded-3 p-2">
                {dropdownItems.map((item, index) => (
                  <li key={index}>
                    <a className="dropdown-item py-2 px-3 rounded" href="#">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>

          {/* Mobile Menu Button & Icons */}
          <div className="d-flex align-items-center gap-3">
            {/* Desktop Icons - Hidden on mobile */}
            <div className="d-none d-lg-flex align-items-center gap-3">
              {/* Cart */}
              <button
                className="cart rounded-circle position-relative border-0 bg-transparent text-white"
                style={{ width: "3rem", height: "3rem" }}
                onClick={openCart}
              >
                <ShoppingCart size={24} />
                {cartQuantity > 0 && (
                  <div
                    className="rounded-circle bg-danger d-flex justify-content-center align-items-center text-white"
                    style={{
                      width: "1rem",
                      height: "1rem",
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      transform: "translate(25%,25%)",
                      fontSize: "0.7rem",
                    }}
                  >
                    {cartQuantity}
                  </div>
                )}
              </button>

              {/* User Icon */}
              {isAuthenticated && (
                <div
                  className="user d-flex justify-content-center align-items-center"
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    backgroundColor: "#092E22",
                    color: "white",
                    borderRadius: "50%",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    window.location.href = "/profile";
                  }}
                >
                  <User style={{ width: "1.5rem", height: "1.5rem" }} />
                </div>
              )}

              {/* Login Button */}
              {!isAuthenticated && (
                <Link
                  to="/login"
                  className="login-btn border border-light bg-transparent text-white px-3 py-1 rounded-3 fw-bold text-decoration-none"
                >
                  Login
                </Link>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="d-lg-none mobile-menu-btn"
              onClick={toggleMenu}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '12px',
                padding: '8px',
                color: 'white',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="mobile-menu-overlay position-fixed w-100 h-100 d-lg-none"
          style={{
            top: 0,
            left: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 49,
            backdropFilter: 'blur(5px)'
          }}
          onClick={closeMenu}
        />
      )}

      {/* Mobile Slide Menu */}
      <div 
        className={`mobile-slide-menu position-fixed d-lg-none ${isMenuOpen ? 'open' : ''}`}
        style={{
          top: 0,
          right: isMenuOpen ? 0 : '-100%',
          width: '300px',
          height: '100vh',
          background: 'linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)',
          zIndex: 50,
          transition: 'right 0.3s ease',
          overflowY: 'auto',
          boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.3)'
        }}
      >
        {/* Menu Header */}
        <div className="p-4 border-bottom border-light border-opacity-25">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <img src={LOGO} alt="Logo" style={{ height: "30px" }} />
              <span className="text-white fw-bold">Avocado</span>
            </div>
            <button 
              onClick={closeMenu}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'white',
                padding: '4px'
              }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* User Section */}
        <div className="p-4 border-bottom border-light border-opacity-25">
          <div className="d-flex align-items-center gap-3">
            {isAuthenticated ? (
              <>
                <div
                  className="user d-flex justify-content-center align-items-center"
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    color: "white",
                    borderRadius: "50%",
                  }}
                >
                  <User style={{ width: "1.2rem", height: "1.2rem" }} />
                </div>
                <div>
                  <div className="text-white fw-semibold">Welcome back!</div>
                  <div className="text-light opacity-75 small">Manage your account</div>
                </div>
              </>
            ) : (
              <div className="w-100">
                <Link
                  to="/login"
                  className="btn w-100 text-white border border-light border-opacity-50 rounded-3 fw-bold text-decoration-none"
                  onClick={closeMenu}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  Login / Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="p-3">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="d-block text-white text-decoration-none p-3 rounded mb-2"
              onClick={closeMenu}
              style={{
                transition: 'all 0.3s ease',
                fontSize: '1.1rem',
                fontWeight: '500'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'translateX(8px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.transform = 'translateX(0)';
              }}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Menu Items Dropdown */}
        <div className="p-3 border-top border-light border-opacity-25">
          <div className="text-white fw-semibold mb-3 px-3" style={{ fontSize: '0.9rem', opacity: '0.8' }}>
            MENU CATEGORIES
          </div>
          {dropdownItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="d-block text-white text-decoration-none p-2 px-3 rounded mb-1"
              onClick={closeMenu}
              style={{
                transition: 'all 0.3s ease',
                fontSize: '0.95rem',
                opacity: '0.9'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'translateX(8px)';
                e.target.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.transform = 'translateX(0)';
                e.target.style.opacity = '0.9';
              }}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Cart Section */}
        <div className="p-4 border-top border-light border-opacity-25 mt-auto">
          <button
            className="btn w-100 position-relative d-flex align-items-center justify-content-center gap-3"
            onClick={() => { openCart(); closeMenu(); }}
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: 'white',
              borderRadius: '12px',
              padding: '12px',
              backdropFilter: 'blur(10px)'
            }}
          >
            <ShoppingCart size={20} />
            <span className="fw-semibold">View Cart</span>
            {cartQuantity > 0 && (
              <span
                className="position-absolute bg-danger rounded-circle d-flex align-items-center justify-content-center text-white"
                style={{
                  width: "20px",
                  height: "20px",
                  top: "-5px",
                  right: "10px",
                  fontSize: "0.7rem",
                  fontWeight: "bold"
                }}
              >
                {cartQuantity}
              </span>
            )}
          </button>
        </div>
      </div>

      <style jsx>{`
        .mobile-menu-btn:hover {
          background: rgba(255, 255, 255, 0.2) !important;
          transform: scale(1.05);
        }
        
        .mobile-slide-menu::-webkit-scrollbar {
          width: 6px;
        }
        
        .mobile-slide-menu::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
        }
        
        .mobile-slide-menu::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 3px;
        }
        
        @media (max-width: 991.98px) {
          .navbar-nav {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Nav;