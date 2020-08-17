import React from "react";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import Routes from "./components/Routes";
import {BrowserRouter} from "react-router-dom";


function App() {
    return (
        <div className='body'>
            <BrowserRouter>
                <NavBar/>
                <div className='main-wrapper'>
                    <main className='container'>
                        <Routes/>
                    </main>
                </div>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
