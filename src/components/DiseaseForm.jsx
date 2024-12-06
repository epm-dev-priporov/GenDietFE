import React, {useEffect} from 'react';
import Form from "react-bootstrap/Form";
import client from "../client/Client.js"
import MixtureStore from "../store/AppStore";
import {observer} from "mobx-react-lite";

export const DiseaseForm = observer(() => {
    const selectDisease = (data, value) => {
        if (value == null) {
            return
        }
        let mixtures = data
            .filter(it => it.name === value)
            .flatMap(i => i.mixtures.map(it => it.name))
            .sort()

        setTargetDisease(value)
        setMixtures(mixtures)
        setTargetMixture(mixtures[0])
    }

    let {diseases, data, setTargetDisease, setTargetMixture, setData, setDiseases, setMixtures} = MixtureStore;

    useEffect(() => {
        client.get("disease").then(
            (value) => {
                setData(value)
                let diseaseList = value.map(i => i.name).sort();
                setDiseases(diseaseList)
                selectDisease(value, diseaseList[0])
            }
        ).catch((error) => {
            console.log(error);
        });
    }, []);

    let names = diseases.map((value, index) => <option key={index}>{value}</option>)

    return <div>
        <div>Заболевание</div>
        <Form.Select className={"disease-form"}
            onChange={it => selectDisease(data, it.target.value)}>
            {names}
        </Form.Select>
    </div>
});

export default DiseaseForm;