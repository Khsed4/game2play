import useData from "./useData";

export interface Genres {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

const useGeneres = () => {
  const { isLoading, error, data } = useData<Genres>("/genres");
  return { isLoading, error, data };
};
export default useGeneres;
