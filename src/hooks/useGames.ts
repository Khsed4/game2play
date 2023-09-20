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

const useGames = (
  selectedGenre: Genres | null,
  selectedPlatfrom: platform | null
) => {
  const { data, isLoading, error } = useData<Game>(
    "/games",
    {
      params: { genres: selectedGenre?.id, platforms: selectedPlatfrom?.id },
    },
    [selectedGenre?.id, selectedPlatfrom?.id]
  );
  return { data, error, isLoading };
};
export default useGames;
