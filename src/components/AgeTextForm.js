import Form from "react-bootstrap/Form";
import {observer} from "mobx-react-lite";
import AppStore from "../store/AppStore";

export const AgeTextForm = observer(() => {
    let {setAge} = AppStore;
    const handlePressedKey = () =>  {

    }
    const setNewAge = (it) =>  {
        let age = it.target.value;
        console.log("age = ", age)
        setAge(age)
    }

    return <div>
        Возраст
        <Form.Control onKeyDown={handlePressedKey} onChange={setNewAge}/>
        лет
    </div>
});

export default AgeTextForm;