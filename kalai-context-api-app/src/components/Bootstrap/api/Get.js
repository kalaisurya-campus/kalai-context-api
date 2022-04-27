import axios from "axios";

export function getDatasmain() {
    return axios.get(`https://jsonplaceholder.typicode.com/users`);
}
