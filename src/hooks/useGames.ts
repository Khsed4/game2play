import { useEffect, useState } from "react";
import ApiClients from "../services/ApiClients";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genres } from "./useGenres";
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

const useGames = (selectedGenre: Genres | null) => {
  const { data, isLoading, error } = useData<Game>(
    "/games",
    {
      params: { genres: selectedGenre?.id },
    },
    [selectedGenre?.id]
  );
  return { data, error, isLoading };
};
export default useGames;
