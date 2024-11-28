import Form from "react-bootstrap/Form";
import {observer} from "mobx-react-lite";
import AppStore from "../store/AppStore";

export const WeightTextForm = observer(() => {
    let {data} = AppStore;
    const handePressedKey = () =>  {

    }

    return <div>
        Вес
        <Form.Control onKeyDown={handePressedKey}/>
        кг
    </div>
});

export default WeightTextForm;