import {observer} from "mobx-react-lite";
import AppStore from "../store/AppStore";
import {toJS} from "mobx";

export const ResultForm = observer(()=>{
    let {result} = AppStore;
    let list = toJS(result).map((value, index)=> <div>{value}</div>)
    console.log("list = ", list)
    return <div>
        Результат:
        <div>
            {list}
        </div>
    </div>
})