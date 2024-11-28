import React from 'react';
import Form from "react-bootstrap/Form";
import Client from "../client/Client.js"
import MixtureStore from "../store/AppStore";
import {observer} from "mobx-react-lite";
import {toJS} from "mobx";

let client = new Client();

export const MixtureForm = observer(() => {
    let {mixtures} = MixtureStore;

    let toOptionKey = (value) => {
        return value.map(it => <option key={it}>{it}</option>)
    }

    return <Form.Select>
        {toOptionKey(toJS(mixtures))}
    </Form.Select>
})

export default MixtureForm;