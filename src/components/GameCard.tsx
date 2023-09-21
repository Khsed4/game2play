import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import getCroppedImageURL from "../services/imageUrL";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageURL(game.background_image)} />
      <CardBody>
        <Heading fontSize={{ s: "1xl", md: "2xl", lg: "2xl", xl: "3xl" }}>
          {game.name}
        </Heading>
        <HStack justifyContent="space-between">
          <PlatformIconsList
            platforms={game.parent_platforms.map((pl) => pl.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
