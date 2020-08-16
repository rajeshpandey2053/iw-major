import React from "react";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import Routes from "./components/Routes";
import {BrowserRouter} from "react-router-dom";


function App() {
    return (
        <div>
            <BrowserRouter>
                <NavBar/>
                <main>
                    <Routes/>
                </main>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
