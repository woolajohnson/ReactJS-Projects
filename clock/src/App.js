import "./App.css";
// import { BG } from "../public/BG";

function App() {
    let dateNow = new Date();
    return (
        <div className="clock">
            <h1>Hello, world!</h1>
            <h2>
                It is <span>{dateNow.toLocaleTimeString()}. haha</span>
            </h2>
        </div>
    );
}

export default App;
