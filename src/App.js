import React, {Component} from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';

// https://github.com/signavio/react-mentions
class App extends Component {
    toItem(array){
        const items = Array.from(array).map((item, index) => {
            return <option value={index}>{item}</option>
        });

        return items;
    }

    render() {
        var a = ["Фенилкетонурия", "Изовалериановая ацидемия", "Тирозинемия","лейциноз"]
        return (
            <div className="App">
                <div>
                    Заболевание
                </div>
                <Form.Select aria-label="Default select example">
                    {this.toItem(a)}
                </Form.Select>
            </div>
        );
    }
}

export default App;
