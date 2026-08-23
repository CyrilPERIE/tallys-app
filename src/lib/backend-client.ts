"use server";

const BACKEND_URL = process.env.BACKEND_URL;

if(!BACKEND_URL) {
    throw new Error("BACKEND_URL is not set");
}

type FetchBackendParams = {
    endpoint: string;
}

export async function fetchBackend<T>({
    endpoint
  }: FetchBackendParams): Promise<T> {
    const url = `${BACKEND_URL}${endpoint}`
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    }
    const data = await response.json()
    return data as T;
  }