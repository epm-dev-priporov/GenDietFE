import React from 'react';
import Form from "react-bootstrap/Form";
import MixtureStore from "../store/AppStore";
import {observer} from "mobx-react-lite";
import {toJS} from "mobx";

export const MixtureForm = observer(() => {
    let {mixtures, setTargetMixture} = MixtureStore;
    let selectMixture = (value) => {
        setTargetMixture(value)
    }
    let toOptionKey = (value) => {
        return value.map(it => <option key={it}>{it}</option>)
    }

    return <div>
        Препарат
        <Form.Select onChange={ (it) => {selectMixture(it.target.value)}}>
            {toOptionKey(toJS(mixtures))}
        </Form.Select>
    </div>
})

export default MixtureForm;