import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { aboutCardData } from "./Data";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  // Automatically close mobile menu when route or hash changes
  useEffect(() => {
    updateExpanded(false);
  }, [location.pathname, location.hash]);

  const isActive = (path) => {
    if (path === "/" && (location.pathname === "/" || location.pathname === "")) {
      return true;
    }
    return location.pathname.includes(path) && path !== "/";
  };

  return (
    <nav
      className={`navbar modern-navbar fixed-top ${
        navColour ? "sticky" : ""
      }`}
    >
      <div className="container">
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center"
          onClick={() => updateExpanded(false)}
        >
          <div className="navbar-brand-badge">RRK</div>
          <span className="navbar-brand-name">{aboutCardData.fullName}</span>
        </Link>

        {/* Custom hamburger toggle: purely React state, 0 findDOMNode calls */}
        <button
          type="button"
          className={`modern-nav-toggler ${expand ? "open" : ""}`}
          onClick={() => updateExpanded(!expand)}
          aria-label="Toggle navigation"
          aria-expanded={expand}
        >
          <span className="toggler-bar"></span>
          <span className="toggler-bar"></span>
          <span className="toggler-bar"></span>
        </button>

        {/* Collapsible Navigation items */}
        <div className={`modern-nav-collapse ${expand ? "show" : ""}`}>
          <div className="navbar-nav ml-auto align-items-center">
            <div className="nav-item">
              <Link
                to="/"
                onClick={() => updateExpanded(false)}
                className={`nav-link ${
                  isActive("/") ? "nav-link-active" : "nav-link-item"
                }`}
              >
                <AiOutlineHome style={{ marginBottom: "2px", marginRight: "6px" }} />
                <span>Home</span>
              </Link>
            </div>

            <div className="nav-item">
              <Link
                to="/about"
                onClick={() => updateExpanded(false)}
                className={`nav-link ${
                  isActive("/about") ? "nav-link-active" : "nav-link-item"
                }`}
              >
                <AiOutlineUser style={{ marginBottom: "2px", marginRight: "6px" }} />
                <span>About</span>
              </Link>
            </div>

            {/* <div className="nav-item">
              <Link
                to="/resume"
                onClick={() => updateExpanded(false)}
                className={`nav-link ${
                  isActive("/resume") ? "nav-link-active" : "nav-link-item"
                }`}
              >
                <CgFileDocument style={{ marginBottom: "2px", marginRight: "6px" }} />
                <span>Resume</span>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
