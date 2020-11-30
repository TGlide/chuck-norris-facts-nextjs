import Axios, { AxiosResponse } from "axios";

export interface SearchResponse {
  total: number;
  result: SearchResult[];
}

export interface SearchResult {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}

export async function Search(query: string): Promise<SearchResponse> {
  const { NEXT_PUBLIC_CHUCK_NORRIS_API_URL } = process.env;

  if (!NEXT_PUBLIC_CHUCK_NORRIS_API_URL)
    throw new Error("Couldn't find the URL.");

  try {
    const response: AxiosResponse<SearchResponse> = await Axios.get(
      `${NEXT_PUBLIC_CHUCK_NORRIS_API_URL}jokes/search?query=${query}`
    );

    return response.data;
  } catch (e) {
    throw new Error(e);
  }
}
