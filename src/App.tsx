import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Skills} from "./components/Skils/Skils";
import {Block3} from "./components/Block3/Block3";


function App() {

    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Block3/>
        </div>
    );
}

export default App;
