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
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
  const { data, isLoading, error } = useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sort?.value,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );
  return { data, error, isLoading };
};
export default useGames;
