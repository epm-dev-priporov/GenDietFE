import React, {useEffect} from 'react';
import Form from "react-bootstrap/Form";
import client from "../client/Client.js"
import MixtureStore from "../store/AppStore";
import {observer} from "mobx-react-lite";

export const SexForm = observer(() => {
    const selectSex = (value) => {
        console.log("1 sex = ",value)
        if (value == null) {
            return
        }
        if(value === "М"){
            setSex("M")
        }
        if(value === "Ж"){
            setSex("F")
        }
    }

    let {sex, setSex} = MixtureStore;

    let names = ["М", 'Ж'].map((value, index) => <option key={index}>{value}</option>)

    return <div className={"sex-element"}>
        <div>Пол</div>
        <Form.Select className={"sex-form"}
                     onChange={it => selectSex(it.target.value)}>
            {names}
        </Form.Select>
    </div>
});

export default SexForm;