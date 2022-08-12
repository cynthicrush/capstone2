import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3000'

class JensKitchenApi {
    static token
    static async request(endpoint, data={}, method='get') {
        const url = `${BASE_URL}/${endpoint}`
        const headers = { Authorication: `Bearer ${JensKitchenApi.token}`}
        const params = (method === 'get')
            ? data
            : {}
        try {
            return (await axios({url, method, data, params, headers})).data;
        } catch(error) {
            console.error('API Error:', error.response)
            let meassage = error.response.data.error.meassage;
            throw Array.isArray(meassage) ? meassage : [meassage]
        }
    }

    static async signup(data) {
        let response = await this.request('auth/register', data, 'post')
        return response.token
    }

    static async login(data) {
        let response = await this.request('auth/token', data, 'post')
        return response.token
    }
}

export default JensKitchenApi
