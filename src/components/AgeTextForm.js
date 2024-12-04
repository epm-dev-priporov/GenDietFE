import Form from "react-bootstrap/Form";
import {observer} from "mobx-react-lite";
import AppStore from "../store/AppStore";

export const BirthDayTextForm = observer(() => {
    let {setBirthDay} = AppStore;
    const handlePressedKey = () =>  {

    }
    const setNewBirthDay = (it) =>  {
        let age = it.target.value;
        console.log("age = ", age)
        setBirthDay(age)
    }

    return <div>
        День рождения
        <Form.Control onKeyDown={handlePressedKey} onChange={setNewBirthDay}/>
         формат (yyyy-MM-dd). Пример; 2000-01-01
    </div>
});

export default BirthDayTextForm;