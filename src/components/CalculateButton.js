import {observer} from "mobx-react-lite";
import Button from 'react-bootstrap/Button';

export const CalculateButton = () => {
    const handle = () => {
        console.log("!")
    }

    return <Button variant="success" onClick={handle}>
            Calculate
        </Button>
};

export default CalculateButton;