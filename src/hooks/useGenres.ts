import { useEffect, useState } from "react";
import ApiClients from "../services/ApiClients";
import { CanceledError } from "axios";
interface Genres {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}
interface GenresFetchResponse {
  counter: number;
  results: Genres[];
}
const useGeneres = () => {
  const [genres, setGenres] = useState<Genres[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    ApiClients.get<GenresFetchResponse>("/genres")
      .then((response) => {
        console.log(" Genres \n", response);
        setGenres(response.data.results);
        setLoading(false);
      })
      .catch((errors) => {
        if (errors instanceof CanceledError) return;
        setErrors(errors);
        setLoading(false);
      });
    return controller.abort();
  }, []);
  return { genres, errors, isLoading };
};
export default useGeneres;
