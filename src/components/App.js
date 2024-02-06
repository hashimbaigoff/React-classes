import React from "react";
import Header from "./header";
import Footer from "./footer";
import Content from "./Content";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
    return (
        <div>
            <Router >
                <Header />
                <Routes>
                   <Route path="/" Component={Home} />
                   <Route path="/about" Component={About} />
                   <Route path="/contact" Component={Contact} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;