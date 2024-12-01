import axios from 'axios';
import env from "react-dotenv";

class Client {
    constructor() {}
    get(api) {
        return axios.get(env.BACKEND_URL + api).then((res) => {
            return res.data
        });
    }
    post(api, data){
        return axios.post(env.BACKEND_URL + api, data).then((res) => {
            return res.data
        });
    }
}

const client = new Client();
export default client;