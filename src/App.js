import React, {Component} from 'react';
import './App.css';
import DiseaseForm from "./components/DiseaseForm";
import MixtureForm from "./components/MixtureForm";
import AgeTextForm from "./components/AgeTextForm";
import WeightTextForm from "./components/WeightTextForm";
import CalculateButton from "./components/CalculateButton";

class App extends Component {
    render() {
        return (
            <div className="App">
                <DiseaseForm/>
                <MixtureForm/>
                <AgeTextForm/>
                <WeightTextForm/>
                <div>
                    <CalculateButton/>
                </div>
            </div>
        );
    }
}

export default App;
