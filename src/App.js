import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer";
import Resume from "./components/Resume/Resume";
import Invitation from "./components/Invitation/Invitation";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  HashRouter,
} from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";
import ScrollToTop from "./components/ScrollToTop";
import ReactGA from "react-ga";
import { TRACKING_ID } from "./components/Data";
import SangeethaHorosocope from "./components/Horoscope/SangeethaHorosocope";
import Horosocope from "./components/Horoscope/Horosocope";

function App() {
  const [load, upadateLoad] = useState(true);

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
   <Router>
    <HashRouter>
      <Helmet>
        <title>Raja Ravi Kumar</title>
        <meta name="description" content="RRK personal website" />
        <meta
          name="google-site-verification"
          content="hSj4HfG8Q7M6RvXBgjEHt1n4lhZMfqtLtBJ2F46Fb5Y"
        />
      </Helmet>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
           { window.location.pathname.includes('invitation') || window.location.hash.includes('invitation') || window.location.pathname.includes('sangeetha') || window.location.hash.includes('sangeetha')? '' : <Navbar />}
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          {/* <Route path="/invitation" component={Invitation} /> */}
          <Route path="/sangeetha" component={SangeethaHorosocope} />
        </Switch>
        <Footer />
      </div>
    </HashRouter> 
</Router>
  );
}

export default App;
