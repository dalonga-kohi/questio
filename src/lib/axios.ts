import axios from "axios"

const BASE_URL = 'http://localhost:6789/api/v1/'

export async function aGet(endpoint: string) {
    try {
        const res = await axios.get(`${BASE_URL}${endpoint}`)
        const data = res.data
        if(res.status != 200) return data.error
        return data.response
    } catch (error) {
        return error
    }

}