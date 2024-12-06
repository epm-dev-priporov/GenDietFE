import {observer} from "mobx-react-lite";
import AppStore from "../store/AppStore";
import {toJS} from "mobx";

export const ResultForm = observer(()=>{
    let {result} = AppStore;
    let list = toJS(result).map((value, index)=> <div key={index}>{value}</div>)

    return <div>
        <div>
            {list}
        </div>
    </div>
})