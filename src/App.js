import React from "react";

import NavBar from "./components/Navbar/NavBar";
import Routes from "./components/Routes";
import {BrowserRouter} from "react-router-dom";




function App() {
    return (
            <div className='body'>
                <BrowserRouter>
                    <NavBar/>
                    <main className='container-fluid main-wrapper'>
                        <Routes/>
                    </main>
                </BrowserRouter>
            </div>
    );
}

export default App;
