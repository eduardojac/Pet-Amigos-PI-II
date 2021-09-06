import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://rest-api-petamigos.herokuapp.com'
})

export default instance; 