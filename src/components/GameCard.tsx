import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={{ s: "1xl", md: "2xl", lg: "2xl", xl: "3xl" }}>
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
