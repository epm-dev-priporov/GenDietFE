import React, {useEffect} from 'react';
import Form from "react-bootstrap/Form";
import Client from "../client/Client.js"
import MixtureStore from "../store/AppStore";
import {observer} from "mobx-react-lite";

let client = new Client();

export const DiseaseForm = observer(() => {
    const fun = (value) => {

        let mixtures = data
            .filter(it => it.name === value)
            .flatMap(i => i.mixtures.map( it => it.name))
        console.log(mixtures)
        setMixtures(mixtures)

        let mixtureObjectList = data
            .filter(i => i.name === value)
            .flatMap(i => i.mixtures.map( it => {
                it.id, it.name
            }))

    }

    let {diseases,  data, setData, setDiseases, setMixtures} = MixtureStore;
    useEffect(() => {
        client.get("disease").then(
            (value) => {
                setData(value)
                setDiseases(value.map(i => i.name))
            }
        ).catch((error) => {
            console.log(error);
        });
    }, []);

    let names = diseases.map((value, index) => <option key={index}>{value}</option>)

    return <Form.Select onChange={it => fun(it.target.value)}>
        {names}
    </Form.Select>
})

export default DiseaseForm;