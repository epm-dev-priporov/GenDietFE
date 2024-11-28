import React, {useEffect} from 'react';
import Form from "react-bootstrap/Form";
import Client from "../client/Client.js"
import MixtureStore from "../store/AppStore";
import {observer} from "mobx-react-lite";

let client = new Client();

export const DiseaseForm = observer(() => {
    const selectDisease = (data, value) => {

        if (value == null) {
            return
        }
        let mixtures = data
            .filter(it => it.name === value)
            .flatMap(i => i.mixtures.map(it => it.name))

        setMixtures(mixtures)
    }

    let {diseases, data, setData, setDiseases, setMixtures} = MixtureStore;
    useEffect(() => {
        client.get("disease").then(
            (value) => {
                setData(value)
                let diseasList = value.map(i => i.name);
                setDiseases(diseasList)
                selectDisease(value, diseasList[0])
            }
        ).catch((error) => {
            console.log(error);
        });
    }, []);

    let names = diseases.map((value, index) => <option key={index}>{value}</option>)


    return <Form.Select
        onChange={it => selectDisease(data, it.target.value)}>
        {names}
    </Form.Select>
})

export default DiseaseForm;