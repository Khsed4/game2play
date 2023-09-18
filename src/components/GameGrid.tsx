import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        padding={2}
        spacing={10}
      >
        {isLoading
          ? skeletons.map((sk) => <GameCardSkeleton />)
          : games.map((game) => (
              <GameCard game={game} key={game.id}></GameCard>
            ))}
      </SimpleGrid>
    </>
  );
};
export default GameGrid;
