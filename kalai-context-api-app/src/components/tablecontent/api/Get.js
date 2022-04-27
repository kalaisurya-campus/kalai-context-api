import axios from "axios";

export function getTableData() {
    return axios.get(`https://jsonplaceholder.typicode.com/users`);
}
