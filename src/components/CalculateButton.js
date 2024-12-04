import Button from 'react-bootstrap/Button';
import {observer} from "mobx-react-lite";
import AppStore from "../store/AppStore";
import client from "../client/Client";

const CalculateButton = observer(() => {
    let {mixtureId, weight, birthDay, setResult} = AppStore;
    const handle = () => {
        console.log("mixtureId = ", mixtureId)
        let data = {
            "weight": weight,
            "mixtureId": mixtureId,
            "birthDay": birthDay
        }

        client.post("calculation", data).then(response => {
            console.log(response);
            setResult(response)
        }).catch((error) => {
            console.log(error);
        });
    }

    return <div>
        <Button onClick={handle}>
            Рассчитать
        </Button>
    </div>
})

export default CalculateButton;