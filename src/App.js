import './App.css';
import './components/Input'
import Input from "./components/Input";
import {useState} from "react";



function App() {
    const [kapital, setKapital] = useState()
    const [zinssatz, setZinssatz] = useState()
    const [laufzeit, setLaufzeit] = useState()
    const [result, setResult] = useState()

    function calculateInput(kapital, zinssatz, laufzeit) {
        return ;
    }

    function workWithInput(kapital, zinssatz, laufzeit){
            let res = {};
            for(let i = 0; i <= 10;i++) {
            res[i] = calculateInput(kapital, zinssatz, laufzeit);
            }
}
  return (
    <div>
      <h1>Zinsenrechner</h1>

            <Input name = 'Kapital' handleInput = {(value) => setKapital(value)}/>
            <Input name = 'Zinssatz' handleInput = {(value) => setZinssatz(value)}/>
            <Input name = 'Laufzeit' handleInput = {(value) => setLaufzeit()(value)}/>
            <button>Berechnen</button>

    </div>
  );
}

export default App;
