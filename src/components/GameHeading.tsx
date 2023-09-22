import { Heading, Stack, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery?.platform?.name || ""} ${
    gameQuery?.genre?.name || ""
  } Games`;
  return (
    <Stack>
      <Heading as="h1" fontSize={"3xl"} marginY={5}>
        {heading}
      </Heading>
    </Stack>
  );
};

export default GameHeading;
