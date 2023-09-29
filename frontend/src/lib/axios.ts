import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export const BASE_URL = 'http://localhost:6789'
export const API_URL = `${BASE_URL}/api/v1/`

export async function axiosGet<T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> {
  const response: AxiosResponse<T> = await axios.get(API_URL + url, config)
  return response.data
}

export async function axiosPost<T>(
  url: string,
  data: Data,
  config?: AxiosRequestConfig,
): Promise<T> {
  const response: AxiosResponse<T> = await axios.post(
    API_URL + url,
    data,
    config,
  )
  return response.data
}

export interface QuestItem {
  id?: number
  title?: string
  description?: string
  image?: string
  author_name?: string
  steps?: string
  tags?: string
  enrolled?: number
  achieved?: number
  creation_date?: string
}

export interface QuestResponse {
  response: QuestItem[]
}

export interface LoginResponse {
  response?: string
  error?: string
}

interface Data {
  email?: string
  password?: string
}
