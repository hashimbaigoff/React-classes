import React, { useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import Content from "./Content";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import ControlledCom from "./controlledComponent";
import UncontrolledComU from "./uncontrolledComUseref";
import UseRefComp from "./useRef";
import Test from "./test";
import unControlledComp from "./uncontrlledcomp";
import BHeader from "./Header/bootstrapHeader";
import useEffectCom from "./useEffect";
import FetchRequest from "./fetchAPI";
import Person from "./Person";
import useStateA from "./useStateA";
import useStateO from "./useStateO";
import fetchAPI from "./fetchAPI";
import FetchAPI from "./fetchAPI";

function App() {
    return (
        <div>
            <Router >
                {/* <BHeader /> */}
                <Routes>
                   <Route path="/" Component={Home} />
                   <Route path="/about" Component={About} />
                   <Route path="/contact" Component={Contact} />
                   <Route path="/control" Component={ControlledCom} />
                   <Route path="/uncontrol" Component={unControlledComp} />
                   <Route path="/uncontrolu" Component={UncontrolledComU} />
                   <Route path="/useref" Component={UseRefComp} />
                   <Route path="/test" Component={Person} />
                </Routes>
                {/* <Footer /> */}
            </Router>
        </div>
    )
}

export default App;