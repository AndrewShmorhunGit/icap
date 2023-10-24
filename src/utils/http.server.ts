import { TDataResponse } from "@/types";

export async function httpTabletsGET(): Promise<TDataResponse> {
  const response = await fetch((process.env.API_URL as string) + "?limit=100");
  const data = response.json();
  return data;
}

export async function apiAuth() {
  const response = await fetch("http://146.190.118.121/api/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "testuser",
      password: "testpassword123",
    }),
  });
  const data = response.body;
  return data;
}
