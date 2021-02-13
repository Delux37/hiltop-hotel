import axios from 'axios'

const req = axios.create({
    baseURL: `https://www.hilltop.ge/api/`,
    headers: {
        'Accept-Language' : 'lang'
    }
})

export default req;