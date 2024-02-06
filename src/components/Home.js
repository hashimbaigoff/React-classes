import React, { useEffect } from "react";
import Content from "./Content";
import Footer from "./footer";


function Home() {
    return (
        <div>
            <h1>Home page</h1>
            <>
                <h1>Heading</h1>
                <h1>Heading</h1>
                <h1>Heading</h1>
                <h1>Heading</h1>
                <h1>Heading</h1>
                <h1>Heading</h1>
            </>
            <Content />
            <Footer />
        </div>
    )
}

export default Home;

//hooks with object and arrays
//useEffect,
//Refs,
//HOC
//Fetch
//error-boundary