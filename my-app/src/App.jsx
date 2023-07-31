import React from 'react';
import './app.css';
import Header from "./components/Header";
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Header/>
                <AppRouter/>
                <Navbar/>
            </BrowserRouter>
        </div>
    );
}

export default App;
