import axios, { AxiosResponse } from 'axios'

const BASE_URL = 'http://localhost:6789/api/v1/'

export const axiosGet = async <T>(url: string): Promise<AxiosResponse<T>> => {
  return axios.get<T>(`${BASE_URL}${url}`)
}

export interface DataItem {
  id: number
  title: string
}
