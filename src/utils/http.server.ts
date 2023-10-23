import { TDataResponse } from "@/types";

export async function httpTabletsGET(): Promise<TDataResponse> {
  const response = await fetch((process.env.API_URL as string) + "?limit=100");
  const data = response.json();
  return data;
}
