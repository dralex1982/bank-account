import './App.css';
import Balance from "./components/Balance";
import Operation from "./components/Operation";
import {useState} from "react";

function App() {
    const [balance, setBalance] = useState(10000);

    const deposit = sum => setBalance(prevState => prevState + sum);
    const withdraw = sum => setBalance(prevBalance =>
        (prevBalance - sum) < 0 ? prevBalance : prevBalance - sum);
    return (
        <div className="App">
            <Balance balance={balance}/>
            <Operation deposit={deposit} withdraw={withdraw}/>
        </div>);
}

export default App;
