import Form from "react-bootstrap/Form";
import {observer} from "mobx-react-lite";
import AppStore from "../store/AppStore";

export const WeightTextForm = observer(() => {
    let {setWeight} = AppStore;
    const handePressedKey = () =>  {

    }
    const setNewWeight = (it) =>  {
        let weight = it.target.value;
        console.log("weight = ", weight)
        setWeight(weight)
    }

    return <div>
        Вес
        <Form.Control onKeyDown={handePressedKey} onChange={setNewWeight}/>
        кг
    </div>
});

export default WeightTextForm;