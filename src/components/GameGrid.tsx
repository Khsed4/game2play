import { useEffect, useState } from "react";
import ApiClients from "../services/ApiClients";
import { Text } from "@chakra-ui/react";
interface Game {
  id: number;
  rating: number;
  name: string;
}
interface FetchResponseGame {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setErrors] = useState("");
  useEffect(() => {
    ApiClients.get<FetchResponseGame>("/games")
      .then((respones) => {
        setGames(respones.data.results);
      })
      .catch((errors) => {
        setErrors(errors.message);
      });
  });
  return (
    <>
      {errors && <Text>{errors}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
