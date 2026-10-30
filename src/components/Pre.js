import React from "react";

function Pre(props) {
  return (
    <div
      id={props.load ? "preloader" : "preloader-none"}
      aria-hidden={!props.load}
    >
      <div className="preloader-content">
        <div className="preloader-visual-wrap">
          <div className="preloader-spinner-ring"></div>
          <div className="preloader-avatar-circle">
            <svg
              viewBox="0 0 100 100"
              className="preloader-svg-logo"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="preloaderTealGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#026670" />
                  <stop offset="50%" stopColor="#028090" />
                  <stop offset="100%" stopColor="#0d9488" />
                </linearGradient>
              </defs>
              <rect width="100" height="100" rx="26" fill="url(#preloaderTealGrad)" />
              <text
                x="50%"
                y="54%"
                fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
                fontSize="56"
                fontWeight="900"
                fill="#ffffff"
                textAnchor="middle"
                dominantBaseline="central"
                letterSpacing="-1"
              >
                R
              </text>
            </svg>
          </div>
        </div>
        <div className="preloader-text-group">
          <span className="preloader-brand-title">RAVI KUMAR R</span>
          <span className="preloader-brand-sub">
            AI SDLC &nbsp;•&nbsp; Front-End Architecture
          </span>
        </div>
        <div className="preloader-progress-track">
          <div className="preloader-progress-bar"></div>
        </div>
      </div>
    </div>
  );
}

export default Pre;
