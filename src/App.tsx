import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Skills} from "./components/Skils/Skils";
import {Block3} from "./components/Block3/Block3";
import {Block4} from "./components/Block4/Block4";
import {Block5} from "./components/Block5/Block5";


function App() {

    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Block3/>
            <Block4/>
            <Block5/>
        </div>
    );
}

export default App;
