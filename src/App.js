import './App.css';
import './components/Input'
import Input from "./components/Input";
import {useState} from "react";
import TableCreate from "./components/TableCreate";



function App() {
    const [kapital, setKapital] = useState(0)
    const [zinssatz, setZinssatz] = useState(0)
    const [laufzeit, setLaufzeit] = useState(0)
    const [result, setResult] = useState(0)
    console.log("kapital" + kapital);
    console.log("zinssatz" + zinssatz);
    console.log("laufzeit" + laufzeit);
    console.log("result" + result);

    function calculateInput(k, z, previous) {
        let res = previous * (1+ z/100);
        return res;
    }

    function workWithInput(){

            let res = {};
            for(let i = 0; i <= laufzeit;i++) {
            res[i] = calculateInput(kapital, zinssatz, i !== 0 ? result[i-1] : kapital);
            }
            setResult(res);

    }
  return (
    <div className={'center'}>
      <h1>Zinsenrechner</h1>

            <Input name = 'Kapital' handleInput = {(value) => setKapital(value)}/>
            <Input name = 'Zinssatz' handleInput = {(value) => setZinssatz(value)}/>
            <Input name = 'Laufzeit' handleInput = {(value) => setLaufzeit(value)}/>
            <button onClick = {workWithInput}>Berechnen</button>
            <TableCreate result = {result}></TableCreate>

    </div>
  );
}

export default App;
