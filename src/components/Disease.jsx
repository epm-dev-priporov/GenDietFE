import React, {useEffect, useState} from 'react';
import Form from "react-bootstrap/Form";
import Client from "../client/Client.js"

let client = new Client();

export default function Disease() {
        let [disease, setDisease] = useState([]);

        useEffect(() => {
            client.get("disease").then(
                (value) => {
                    setDisease(value.map( i => i.name))
                }
            ).catch( (error) => {
                console.log(error);
            });
        }, []);

        let names = disease.map((value, index) => <option key={index}>{value}</option>)

        return <Form.Select>
            {names}
        </Form.Select>
}

