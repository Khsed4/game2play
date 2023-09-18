import { useEffect, useState } from "react";
import ApiClients from "../services/ApiClients";
import { CanceledError } from "axios";
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
}
interface FetchResponseGame {
  count: number;
  results: Game[];
}
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setErrors] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    ApiClients.get<FetchResponseGame>("/games", { signal: controller.signal })
      .then((respones) => {
        setGames(respones.data.results);
        console.log(respones.data.results);
      })
      .catch((errors) => {
        if (errors instanceof CanceledError) return;
        setErrors(errors.message);
      });
    return () => controller.abort();
  }, []);
  return { games, error };
};
export default useGames;
