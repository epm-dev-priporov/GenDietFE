import {observer} from "mobx-react-lite";
import AppStore from "../store/AppStore";
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DesktopDatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import 'dayjs/locale/ru';

export const BirthDayTextForm = observer(() => {
    let {setBirthDay} = AppStore;
    const handlePressedKey = () => {

    }
    const setNewBirthDay = (it) => {
        let age = it
        console.log("birthDay = ", age.format("YYYY-MM-DD"))
        setBirthDay(age.format("YYYY-MM-DD"))
    }

    return <div>
        <div>Выберите дату рождения</div>
        <div className ={"mixture-form"}>
            <LocalizationProvider  adapterLocale = "ru" dateAdapter={AdapterDayjs} >
                <DesktopDatePicker onChange={setNewBirthDay} slotProps={{ textField: { size: 'small' } }}/>
            </LocalizationProvider>
        </div>
    </div>
});

export default BirthDayTextForm;