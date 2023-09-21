import { GameQuery } from "../App";
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

const useGames = (gameQuery: GameQuery) => {
  const { data, isLoading, error } = useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  );
  return { data, error, isLoading };
};
export default useGames;
