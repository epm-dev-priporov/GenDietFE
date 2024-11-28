import React, {Component} from 'react';
import './App.css';
import DiseaseForm from "./components/DiseaseForm";
import MixtureForm from "./components/MixtureForm";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    Заболевание
                </div>
                <DiseaseForm/>
                <MixtureForm/>
            </div>
        );
    }
}

export default App;
