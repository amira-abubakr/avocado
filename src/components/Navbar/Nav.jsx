// import React, { useState, useEffect } from "react";
import LOGO from "../../assets/images/logo.png";
import "./Nav.css";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { Search, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Nav = () => {
  const { isAuthenticated } = useAuth();
  const { openCart, cartQuantity } = useShoppingCart();

  // const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => setScrolled(window.scrollY > 50);
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <nav
      dir="ltr"
      className="nav fixed top-0 left-0 w-100 z-50 transition-all"
    >
      <div className="container d-flex align-items-center justify-content-between py-2">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center gap-2 mb-0" href="#">
          <img src={LOGO} alt="Logo" style={{ height: "40px" }} />
          <p className="mb-0 fw-bold">Avocado</p>
        </a>

        {/* Links */}
        <ul className="navbar-nav d-flex flex-row gap-4 mb-0">
          <li className="nav-item">
            <a className="nav-link text-white" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/categories">
              Our Recipes
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/conactUs">
              Contact Us
            </a>
          </li>
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
              <li>
                <a className="dropdown-item py-2 px-3 rounded" href="#">
                  Guacamole
                </a>
              </li>
              <li>
                <a className="dropdown-item py-2 px-3 rounded" href="#">
                  Burgers & Sandwiches
                </a>
              </li>
              <li>
                <a className="dropdown-item py-2 px-3 rounded" href="#">
                  Tacos & Burritos
                </a>
              </li>
              <li>
                <a className="dropdown-item py-2 px-3 rounded" href="#">
                  Salads & Bowls
                </a>
              </li>
              <li>
                <a className="dropdown-item py-2 px-3 rounded" href="#">
                  Avocado Toast
                </a>
              </li>
              <li>
                <a className="dropdown-item py-2 px-3 rounded" href="#">
                  Breakfast
                </a>
              </li>
              <li>
                <a className="dropdown-item py-2 px-3 rounded" href="#">
                  Heart Healthy
                </a>
              </li>
              <li>
                <a className="dropdown-item py-2 px-3 rounded" href="#">
                  Sauces & Spreads
                </a>
              </li>
            </ul>
          </li>
        </ul>

        {/* Icons */}
        <div className="d-flex align-items-center gap-3">
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
      </div>
    </nav>
  );
};

export default Nav;
