import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001'

class JensKitchenApi {
    static token
    static async request(endpoint, data={}, method='get') {
        const url = `${BASE_URL}/${endpoint}`
        const headers = { Authorization: `Bearer ${JensKitchenApi.token}`}
        const params = (method === 'get')
            ? data
            : {}
        try {
            return (await axios({url, method, data, params, headers})).data;
        } catch(err) {
            console.error('API Error:', err.response)
            let meassage = err.response.data.error.message;
            throw Array.isArray(meassage) ? meassage : [meassage]
        }
    }

    static async getCurrentUser(username) {
        let response = await this.request(`users/${username}`)
        return response.user
    }

    static async signup(data) {
        let response = await this.request('auth/register', data, 'post')
        return response.token
    }

    static async login(data) {
        let response = await this.request('auth/token', data, 'post')
        return response.token
    }

    static async getDishes() {
        let response = await this.request('dishes')
        return response.dishes
    }

    static async getDish(id) {
        let response = await this.request(`dishes/${id}`)
        return response.dish
    }

    static async orderDish(username, id) {
        await this.request(`users/${username}/dishes/${id}`, {}, 'post')
    }
}

export default JensKitchenApi
