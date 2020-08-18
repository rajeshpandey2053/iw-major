import React from "react";
import {Switch, Route} from 'react-router-dom';

import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import Routes from "./components/Routes";
import {BrowserRouter} from "react-router-dom";
import Login from './components/Login/Login';
import Register from './components/Register/Register';


function App() {
    return (
        <div className='body'>
            <BrowserRouter>
                <NavBar/>
                <div className='main-wrapper'>
                    <Switch>
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/register' component={Register} />
                    </Switch>
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
