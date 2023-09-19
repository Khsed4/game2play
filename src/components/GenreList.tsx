import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGeneres from "../hooks/useGenres";
import getCroppedImageURL from "../services/imageUrL";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = () => {
  const { isLoading, error, data } = useGeneres();
  const skeletons = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 9];
  if (isLoading) return skeletons.map((sk) => <GenreSkeleton />);
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
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
