import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const BASE_URL = 'http://localhost:6789/api/v1/'

export async function axiosGet<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axios.get(BASE_URL + url, config);
    return response.data;
  } catch (error) {
    throw error;
  }
}

interface QuestItem {
  id: number;
  title: string;
  image: string;
}

export interface QuestResponse {
  response: QuestItem[];
}
