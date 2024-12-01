import {observer} from "mobx-react-lite";
import AppStore from "../store/AppStore";

export const ResultForm = observer(()=>{
    let {result} = AppStore;
    return <div>
        Результат:
        <div>
            {result}
        </div>
    </div>
})