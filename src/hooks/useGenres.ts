import genreList from "../data/genreList";

export interface Genres {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

const useGeneres = () => {
  const { isLoading, error, data } = {
    data: genreList,
    isLoading: false,
    error: null,
  };
  return { isLoading, error, data };
};
export default useGeneres;
