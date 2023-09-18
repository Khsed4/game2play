import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>rating</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game) => (
            <tr key={game.id}>
              <td> {game.id}</td>
              <td>{game.name}</td>
              <td> {game.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default GameGrid;
