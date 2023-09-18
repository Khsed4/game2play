import { useEffect, useState } from "react";
import ApiClients from "../services/ApiClients";
import { CanceledError } from "axios";
interface Game {
  id: number;
  rating: number;
  name: string;
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
        console.log("yes");
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
