import { useEffect, useState } from "react";
import ApiClients from "../services/ApiClients";
import { CanceledError } from "axios";
import useData from "./useData";
export interface platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  rating: number;
  name: string;
  background_image: string;
  parent_platforms: [{ platform: platform }];
  metacritic: number;
}

const useGames = () => {
  const { data, isLoading, error } = useData<Game>("/games");
  return { data, error, isLoading };
};
export default useGames;
