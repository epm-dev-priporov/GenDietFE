import Form from "react-bootstrap/Form";
import {observer} from "mobx-react-lite";
import AppStore from "../store/AppStore";
import SexForm from "./SexForm";

export const WeightTextForm = observer(() => {
    let {setWeight} = AppStore;
    const handePressedKey = (it) =>  {
        console.log("pressed.key", it)
    }
    const setNewWeight = (it) =>  {
        let weight = it.target.value;
        console.log("weight = ", weight)
        setWeight(weight)
    }

    return <div>
        <div> Вес (кг)</div>
        <Form.Control className={"weight-form"} onKeyDown={handePressedKey} onChange={setNewWeight}/>
    </div>
});

export default WeightTextForm;