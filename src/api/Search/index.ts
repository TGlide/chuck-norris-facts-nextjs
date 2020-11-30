import Axios, { AxiosResponse } from "axios";
import { Convert } from "./Convert";

export interface SearchResponse {
  total: number;
  result: SearchResult[];
}

export interface SearchResult {
  categories: string[];
  created_at: Date;
  icon_url: string;
  id: string;
  updated_at: Date;
  url: string;
  value: string;
}

export async function Search(query: string): Promise<SearchResponse | Error> {
  const { REACT_APP_CHUCK_NORRIS_API_URL } = process.env;
  if (!REACT_APP_CHUCK_NORRIS_API_URL)
    return new Error("Couldn't find the URL.");

  try {
    const response = await Axios.get(
      `${REACT_APP_CHUCK_NORRIS_API_URL}search?query=${query}`
    );

    return Convert.toSearchResponse(response.data);
  } catch (e) {
    return new Error(e);
  }
}
