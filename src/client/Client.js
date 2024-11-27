import axios from 'axios';
import env from "react-dotenv";

class Client {
    get(api) {
        return axios.get(env.BACKEND_URL + api).then(res => {
            return res.data
        })
    }
}

export default Client;