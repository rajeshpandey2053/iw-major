import React from "react";
import './home.scss'


const Home = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('tk');
    console.log(myParam)
    return (
        <div>
            <h1>This is a Home Page.</h1>
        </div>
    )
}

export default Home;