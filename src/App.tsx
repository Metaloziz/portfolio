import './App.css';
import {Header} from "./components/Header/Header";
import {Block1} from './components/Block1/Block1';
import {Block2} from "./components/Block2/Block2";
import {Block3} from "./components/Block3/Block3";
import {Block4} from "./components/Block4/Block4";
import {Block5} from "./components/Block5/Block5";


function App() {

  return (
    <div className="App">
      <Header/>
      <Block1/>
      <Block2/>
      <Block3/>
      <Block4/>
      <Block5/>
    </div>
  );
}

export default App;
