import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGeneres, { Genres } from "../hooks/useGenres";
import getCroppedImageURL from "../services/imageUrL";
import GenreSkeleton from "./GenreSkeleton";
interface Props {
  OnSlectedGenre: (genre: Genres) => void;
  highlitedGenre: Genres | null;
}
const GenreList = ({
  OnSlectedGenre: selectedGenre,
  highlitedGenre,
}: Props) => {
  const { isLoading, data } = useGeneres();
  const skeletons = [1, 2, 3, 4, 5, 15, 6, 7, 8, 9, 19];
  if (isLoading) return skeletons.map((sk) => <GenreSkeleton key={sk} />);
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="35px"
              borderRadius={8}
              src={getCroppedImageURL(genre.image_background)}
            />
            <Button
              onClick={() => selectedGenre(genre)}
              variant="link"
              fontWeight={highlitedGenre?.id === genre.id ? "bold" : "normal"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
