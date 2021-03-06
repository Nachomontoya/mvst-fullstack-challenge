import { API } from "../constants/routes";

import axios, { AxiosInstance, AxiosResponse } from "axios";

export function makeTimerApi(): AxiosInstance {
  return axios.create({
    baseURL: `${API.MAIN}${API.TIMER}`,
  });
}

export async function getTotalTime(
  api: AxiosInstance = makeTimerApi(),
): Promise<AxiosResponse> {
  return api.get(``);
}

export async function createNewTime(
  seconds: number,
  api: AxiosInstance = makeTimerApi(),
): Promise<AxiosResponse> {
  return api.post(`/new`, { timer: seconds });
}
