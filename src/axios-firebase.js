import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://squarecandy-c571f.firebaseio.com/'
})

export default instance;