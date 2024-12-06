import React, {Component} from 'react';
import './App.css';
import DiseaseForm from "./components/DiseaseForm";
import MixtureForm from "./components/MixtureForm";
import AgeTextForm from "./components/BirthDayPickerForm";
import WeightTextForm from "./components/WeightTextForm";
import CalculateButton from "./components/CalculateButton";
import {ResultForm} from "./components/ResultForm";
import SexForm from "./components/SexForm";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="grid-container">
                    <DiseaseForm/>
                    <MixtureForm/>
                    <AgeTextForm/>
                    <div className={"weight-sex-header"}>
                        <WeightTextForm/>
                        <SexForm className={"weight-form"}/>
                    </div>
                    <div>
                        <CalculateButton/>
                    </div>
                </div>
                <div className="result">
                    <ResultForm/>
                </div>
            </div>

        );
    }
}

export default App;
