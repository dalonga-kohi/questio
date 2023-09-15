import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const BASE_URL = 'http://localhost:6789/api/v1/'

export async function axiosGet<T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> {
  const response: AxiosResponse<T> = await axios.get(BASE_URL + url, config)
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
