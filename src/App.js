import React, {Component} from 'react';
import './App.css';
import Disease from "./components/Disease";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    Заболевание
                </div>
                <Disease/>
            </div>
        );
    }
}

export default App;
