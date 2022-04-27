import axios from 'axios';


export function GetDatasFunction(){
   return axios.get(`https://jsonplaceholder.typicode.com/users`);
}