import Form from "react-bootstrap/Form";
import {observer} from "mobx-react-lite";

export const AgeTextForm = observer(() => {
    const handePressedKey = () =>  {

    }

    return <div>
        Возраст
        <Form.Control onKeyDown={handePressedKey}/>
        лет
    </div>
});

export default AgeTextForm;